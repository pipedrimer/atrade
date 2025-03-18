import { useState, useEffect } from "react";
import supabase from "../helper/supabaseClient";

const useTransactions = (tableName) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Get the logged-in user's ID
        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser();

        if (userError) throw userError;
        if (!user) throw new Error("User not authenticated");

        // Fetch data where user_id matches the logged-in user's ID
        const { data: fetchedData, error: fetchError } = await supabase
          .from(tableName)
          .select("*")
          .eq("user_id", user.id); // Filtering by user_id

        if (fetchError) throw fetchError;
        setData(fetchedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [tableName]);

  return { data, loading, error };
};

export default useTransactions;

