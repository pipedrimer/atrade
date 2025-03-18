import { useEffect, useState } from "react";
import supabase from "../helper/supabaseClient"; 

const useInvestment = () => {
  const [investments, setInvestments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInvestments = async () => {
      try {
        // Get the current user's ID
        const {
            data: { user },
            error: userError,
          } = await supabase.auth.getUser();
    
          if (userError) throw userError;
          if (!user) throw new Error("User not authenticated");

        // Fetch investments for the current user
        const { data, error } = await supabase
          .from("user_investment")
          .select("*")
          .eq("user_id", user.id);

        if (error) {
          throw error;
        }

        // Separate active and completed investments
        const activeInvestments = data.filter(
          (investment) => investment.status === "active"
        );
        const completedInvestments = data.filter(
          (investment) => investment.status === "completed"
        );

        setInvestments({
          active: activeInvestments,
          completed: completedInvestments,
        });
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInvestments();
  }, []);

  return { investments, loading, error };
};

export default useInvestment;