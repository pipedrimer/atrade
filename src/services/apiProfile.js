import supabase from '../helper/supabaseClient'; // Adjust path as needed

export async function getUserProfiles() {
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      console.error("Error fetching authenticated user:", authError);
      return { data: null, error: authError || "No authenticated user found" };
    }
  
    // Fetch the user's profile using their ID
    let { data: userProfile, error } = await supabase
      .from('user_profile')
      .select('*')
      .eq('id', user.id)  // Assuming "id" in "user_profile" matches "auth.users.id"
      .single(); // Expecting only one profile per user
  
    if (error) {
      console.error("Error fetching user profile:", error);
      return { data: null, error };
    }

  
    return { data: userProfile, error: null };
}
