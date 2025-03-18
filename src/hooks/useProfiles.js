import { useState, useEffect } from 'react';
import { getUserProfiles } from "../services/apiProfile"

export function useProfiles() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProfiles = async () => {
    setLoading(true);
    setError(null);

    const { data, error } = await getUserProfiles();

    if (error) {
      setError(error.message);
      setProfiles([]);
    } else {
      setProfiles(data);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  return { profiles, loading, error };
}