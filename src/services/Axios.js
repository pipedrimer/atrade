import axios from "axios";

const MAILGUN_API_KEY = ""; // Get from Mailgun
const DOMAIN = "email.atrade.it.com"; // Your Mailgun domain

export async function sendEmail(to, subject, text) {
  const url = `https://api.mailgun.net/v3/${DOMAIN}/messages`;

  const formData = new URLSearchParams();
  formData.append("from", `Atrade <no-reply@${DOMAIN}>`);
  formData.append("to", to);
  formData.append("subject", subject);
  formData.append("text", text);

  try {
    const response = await axios.post(url, formData, {
      auth: {
        username: "api",
        password: MAILGUN_API_KEY,
      },
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });

    return response.data;
  } catch (error) {
    console.error("Mailgun error:", error.response?.data || error.message);
    return null;
  }
}
