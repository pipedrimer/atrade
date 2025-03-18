// import { useState, useEffect } from "react";
// import supabase from "../helper/supabaseClient";

// const useBalance = () => {
//   const [balance, setBalance] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchBalance = async () => {
//       try {
//         setLoading(true);
        
//         // Get logged-in user
//         const {
//           data: { user },
//           error: userError,
//         } = await supabase.auth.getUser();

//         if (userError) throw userError;
//         if (!user) throw new Error("User not authenticated");

//         // Fetch balance from user_profile table
//         const { data, error: fetchError } = await supabase
//           .from("user_profile")
//           .select("balance")
//           .eq("id", user.id)
//           .single();

//         if (fetchError) throw fetchError;
        
//         setBalance(data.balance);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBalance();
//   }, []);

//   return { balance, loading, error };
// };

// export default useBalance;
import { useState, useEffect } from "react";
import supabase from "../helper/supabaseClient";

const useBalance = () => {
  const [balance, setBalance] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch balance from the user_profile table
  const fetchBalance = async () => {
    try {
      setLoading(true);
      
      // Get logged-in user
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError) throw userError;
      if (!user) throw new Error("User not authenticated");

      // Fetch balance from user_profile table
      const { data, error: fetchError } = await supabase
        .from("user_profile")
        .select("balance")
        .eq("id", user.id)
        .single();

      if (fetchError) throw fetchError;
      
      setBalance(data.balance);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBalance(); // Fetch balance on initial load
  }, []);

  return { balance, loading, error, refetchBalance: fetchBalance };
};

export default useBalance;
