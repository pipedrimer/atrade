// import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
// import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// const supabase = createClient(
//   Deno.env.get("SUPABASE_URL")!,
//   Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
// );

// const MAILGUN_API_KEY = Deno.env.get("MAILGUN_API_KEY")!;
// const MAILGUN_DOMAIN = Deno.env.get("MAILGUN_DOMAIN")!;

// async function sendMailgunEmail(to: string, subject: string, html: string) {
//   const url = `https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`;

//   const formData = new FormData();
//   formData.append("from", `YourApp <admin@${MAILGUN_DOMAIN}>`);
//   formData.append("to", to);
//   formData.append("subject", subject);
//   formData.append("html", html);

//   const response = await fetch(url, {
//     method: "POST",
//     headers: {
//       Authorization: "Basic " + btoa(`api:${MAILGUN_API_KEY}`),
//     },
//     body: formData,
//   });

//   if (!response.ok) {
//     console.error("Mailgun error:", await response.text());
//   }
// }

// serve(async (req) => {
//   const { record } = await req.json();

//   // Fetch user email
//   const { data: user } = await supabase
//     .from("auth.users")
//     .select("email")
//     .eq("id", record.user_id)
//     .single();

//   if (!user?.email) {
//     console.error("No user email found for:", record.user_id);
//     return new Response("User email not found", { status: 400 });
//   }

//   // Email content based on type
//   let subject = "";
//   let html = "";

//   if (record.type === "deposit_completed") {
//     const { data: deposit } = await supabase
//       .from("deposits")
//       .select("amount, payment_method, transaction_hash, created_at")
//       .eq("id", record.reference_id)
//       .single();

//     subject = "✅ Deposit Confirmed!";
//     html = `
//       <h2>Your Deposit Was Successful 🎉</h2>
//       <p>Amount: <b>${deposit.amount}</b></p>
//       <p>Payment Method: ${deposit.payment_method}</p>
//       <p>Transaction Hash: ${deposit.transaction_hash}</p>
//       <p>Date: ${new Date(deposit.created_at).toLocaleString()}</p>
//       <p>Thank you for trusting us.</p>
//     `;
//   }

//   if (record.type === "withdrawal_completed") {
//     const { data: withdrawal } = await supabase
//       .from("withdrawal")
//       .select("amount, cryptocurrency, wallet, created_at")
//       .eq("id", record.reference_id)
//       .single();

//     subject = "💸 Withdrawal Completed!";
//     html = `
//       <h2>Your Withdrawal Was Successful 🏦</h2>
//       <p>Amount: <b>${withdrawal.amount}</b></p>
//       <p>Payment Method: ${withdrawal.cryptocurrency}</p>
//       <p>Wallet: ${withdrawal.wallet}</p>
//       <p>Date: ${new Date(withdrawal.created_at).toLocaleString()}</p>
//       <p>The funds should arrive shortly.</p>
//     `;
//   }

//   // Send the email
//   await sendMailgunEmail(user.email, subject, html);

//   // Mark as processed
//   await supabase
//     .from("notifications")
//     .update({ processed: true })
//     .eq("id", record.id);

//   return new Response("Email sent", { status: 200 });
// });
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
);

const MAILGUN_API_KEY = Deno.env.get("MAILGUN_API_KEY")!;
const MAILGUN_DOMAIN = Deno.env.get("MAILGUN_DOMAIN")!;

async function sendMailgunEmail(to, subject, html) {
  const url = `https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`;

  const formData = new FormData();
  formData.append("from", `FlipStack <admin@${MAILGUN_DOMAIN}>`);
  formData.append("to", to);
  formData.append("subject", subject);
  formData.append("html", html);

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: "Basic " + btoa(`api:${MAILGUN_API_KEY}`),
    },
    body: formData,
  });

  if (!response.ok) {
    console.error("Mailgun error:", await response.text());
  }
}

serve(async (req) => {
  const { record } = await req.json();

  // ✅ Fetch user email via Admin API instead of .from("auth.users")
  const { data: userData, error: userError } = await supabase.auth.admin.getUserById(record.user_id);

  if (userError || !userData?.user?.email) {
    console.error("Error fetching user email:", userError);
    return new Response("User email not found", { status: 400 });
  }

  const userEmail = userData.user.email;

  let subject = "";
  let html = "";

  if (record.type === "deposit_completed") {
    const { data: deposit } = await supabase
      .from("deposits")
      .select("amount, payment_method, transaction_hash, created_at")
      .eq("id", record.reference_id)
      .single();

    subject = "✅ Deposit Confirmed!";
    html = `
      <h2>Your Deposit Was Successful 🎉</h2>
      <p>Amount: <b>$${deposit.amount}</b></p>
      <p>Payment Method: ${deposit.payment_method}</p>
      <p>Transaction Hash: ${deposit.transaction_hash}</p>
      <p>Date: ${new Date(deposit.created_at).toLocaleString()}</p>
      <p>Thank you for trusting us.</p>
    `;
  }

  if (record.type === "withdrawal_completed") {
    const { data: withdrawal } = await supabase
      .from("withdrawal")
      .select("amount, cryptocurrency, wallet, created_at")
      .eq("id", record.reference_id)
      .single();

    subject = "💸 Withdrawal Completed!";
    html = `
      <h2>Your Withdrawal Was Successful 🏦</h2>
      <p>Amount: <b>${withdrawal.amount}</b></p>
      <p>Payment Method: ${withdrawal.cryptocurrency}</p>
      <p>Wallet: ${withdrawal.wallet}</p>
      <p>Date: ${new Date(withdrawal.created_at).toLocaleString()}</p>
      <p>The funds should arrive shortly.</p>
    `;
  }

  await sendMailgunEmail(userEmail, subject, html);

  // Optional: mark notification processed
  await supabase.from("notifications").update({ processed: true }).eq("id", record.id);

  return new Response("Email sent", { status: 200 });
});