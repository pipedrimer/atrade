// import { useState, useEffect } from "react";
// import { FaUser, FaLock, FaPhone, FaEnvelope, FaGlobe, FaUserShield } from "react-icons/fa";
// // import "bootstrap/dist/css/bootstrap.min.css";
// import "./ProfileSettings.css";
// import { useProfiles } from "../hooks/useProfiles"; // Import profile hook
// import  supabase  from "../helper/supabaseClient"; // Import Supabase client

// const ProfileSettings = () => {
//   const { profiles } = useProfiles(); // Get profile data
//   const [countries, setCountries] = useState([]);
//   const [formData, setFormData] = useState({
//     full_name: "",
//     phone_number: "",
//     email: "",
//     country: "",
//     username: "",
//   });

//   useEffect(() => {
//     if (profiles) {
//       setFormData({
//         full_name: profiles.full_name || "",
//         phone_number: profiles.phone_number || "",
//         email: profiles.email || "",
//         country: profiles.country || "",
//         username: profiles.username || "",
//       });
//     }
//   }, [profiles]);

//   useEffect(() => {
//     fetch("https://restcountries.com/v3.1/all")
//       .then((res) => res.json())
//       .then((data) => {
//         setCountries(data.map((country) => country.name.common).sort());
//       })
//       .catch((err) => console.error("Error fetching countries:", err));
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleProfileSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { error } = await supabase
//         .from("user_profile")
//         .update({
//           full_name: formData.full_name,
//           phone_number: formData.phone_number,
//           country: formData.country,
//           username: formData.username, // Allow username update
//         })
//         .eq("id", profiles.id); // Ensure updating the correct user

//       if (error) throw error;
//       alert("Profile updated successfully!");
      
//     } catch (err) {
//       console.error("Error updating profile:", err.message);
//       alert("Failed to update profile.");
//     }
//   };

//   return (
//     <div className="container mt-5 vh-100">
//       <ul className="nav nav-pills nav-justified mb-3 shadow-sm p-2 bg-white rounded custom-tabs">
//         <li className="nav-item">
//           <a className="nav-link active" data-bs-toggle="tab" href="#basic-info">
//             <FaUser className="me-2" /> Basic Info
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" data-bs-toggle="tab" href="#change-password">
//             <FaLock className="me-2" />Password
//           </a>
//         </li>
//       </ul>

//       <div className="tab-content">
//         <div className="tab-pane fade show active" id="basic-info">
//           <div className="card shadow-sm border-0 rounded">
//             <div className="card-body">
//               <h2 className="card-title mb-4 text-primary">Basic Information</h2>
//               <form onSubmit={handleProfileSubmit}>
//                 <div className="mb-3">
//                   <label className="form-label">
//                     <FaUser className="me-2 text-primary" /> Full Name
//                   </label>
//                   <input
//                     type="text"
//                     name="full_name"
//                     value={formData.full_name}
//                     onChange={handleChange}
//                     className="form-control shadow-sm"
//                     required
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <label className="form-label">
//                     <FaPhone className="me-2 text-primary" /> Phone Number
//                   </label>
//                   <input
//                     type="text"
//                     name="phone_number"
//                     value={formData.phone_number}
//                     onChange={handleChange}
//                     className="form-control shadow-sm"
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <label className="form-label">
//                     <FaEnvelope className="me-2 text-primary" /> Email Address
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     className="form-control shadow-sm"
//                     readOnly
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <label className="form-label">
//                     <FaGlobe className="me-2 text-primary" /> Country
//                   </label>
//                   <select
//                     name="country"
//                     value={formData.country}
//                     onChange={handleChange}
//                     className="form-select shadow-sm"
//                     required
//                   >
//                     <option value="">Select a country</option>
//                     {countries.map((country) => (
//                       <option key={country} value={country}>
//                         {country}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div className="mb-3">
//                   <label className="form-label">
//                     <FaUserShield className="me-2 text-primary" /> Username
//                   </label>
//                   <input
//                     type="text"
//                     name="username"
//                     value={formData.username}
//                     onChange={handleChange}
//                     className="form-control shadow-sm"
//                     required
//                   />
//                 </div>

//                 <button type="submit" className="btn btn-primary w-100 shadow-sm">
//                   Save Changes
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>

//         {/* Change Password Tab */}
//         <div className="tab-pane fade" id="change-password">
//           <div className="card shadow-sm border-0 rounded">
//             <div className="card-body">
//               <h2 className="card-title mb-4 text-danger">Change Password</h2>
//               <form>
//                 <div className="mb-3">
//                   <label className="form-label">
//                     <FaLock className="me-2 text-danger" /> Old Password
//                   </label>
//                   <input type="password" name="currentPassword" className="form-control shadow-sm" required />
//                 </div>

//                 <div className="mb-3">
//                   <label className="form-label">
//                     <FaLock className="me-2 text-danger" /> New Password
//                   </label>
//                   <input type="password" name="newPassword" className="form-control shadow-sm" required />
//                 </div>

//                 <div className="mb-3">
//                   <label className="form-label">
//                     <FaLock className="me-2 text-danger" /> Confirm New Password
//                   </label>
//                   <input type="password" name="confirmPassword" className="form-control shadow-sm" required />
//                 </div>

//                 <button type="submit" className="btn btn-danger w-100 shadow-sm">
//                   Update Password
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileSettings;

import { useState, useEffect } from "react";
import { FaUser, FaLock, FaPhone, FaEnvelope, FaGlobe, FaUserShield } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ProfileSettings.css";
import { useProfiles } from "../hooks/useProfiles"; 
import supabase from "../helper/supabaseClient"; 


const ProfileSettings = () => {
  const { profiles } = useProfiles();
  const [countries, setCountries] = useState([]);
  const [formData, setFormData] = useState({
    full_name: "",
    phone_number: "",
    email: "",
    country: "",
    username: "",
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (profiles) {
      setFormData({
        full_name: profiles.full_name || "",
        phone_number: profiles.phone_number || "",
        email: profiles.email || "",
        country: profiles.country || "",
        username: profiles.username || "",
      });
    }
  }, [profiles]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data.map((country) => country.name.common).sort());
      })
      .catch((err) => console.error("Error fetching countries:", err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();

    try {
      // **Check if the username already exists before updating**
      const { data: existingUser, error: fetchError } = await supabase
        .from("user_profile")
        .select("id")
        .eq("username", formData.username)
        .neq("id", profiles.id) // Exclude the current user's profile
        .single();

      if (fetchError && fetchError.code !== "PGRST116") { // Ignore "No rows found" error
        throw fetchError;
      }

      if (existingUser) {
        toast.error("Username is already taken. Please choose another one.", {
          position: "top-right",
        });
        return;
      }

      // **Update Profile**
      const { error } = await supabase
        .from("user_profile")
        .update({
          full_name: formData.full_name,
          phone_number: formData.phone_number,
          country: formData.country,
          username: formData.username,
        })
        .eq("id", profiles.id);

      if (error) throw error;

      toast.success("Profile updated successfully!", {
        position: "top-right",
      });
      
    } catch (err) {
      console.error("Error updating profile:", err.message);
      toast.error(`Failed to update profile: ${err.message}`, {
        position: "top-right",
      });
    }
  };

  const handlePasswordChange = (e) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast.error("New passwords do not match.", { position: "top-right" });
      return;
    }

    try {
      const { error } = await supabase.auth.updateUser({
        password: passwordData.newPassword,
      });

      if (error) throw error;

      toast.success("Password updated successfully!", { position: "top-right" });
    } catch (err) {
      console.error("Error updating password:", err.message);
      toast.error(`Failed to update password: ${err.message}`, { position: "top-right" });
    }
  };

  return (
    <div className="container mt-5 vh-100">
      <ul className="nav nav-pills nav-justified mb-3 shadow-sm p-2 bg-white rounded custom-tabs">
        <li className="nav-item">
          <a className="nav-link active" data-bs-toggle="tab" href="#basic-info">
            <FaUser className="me-2" /> Basic Info
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="tab" href="#change-password">
            <FaLock className="me-2" />Password
          </a>
        </li>
      </ul>

      <div className="tab-content">
        <div className="tab-pane fade show active" id="basic-info">
          <div className="card shadow-sm border-0 rounded">
            <div className="card-body">
              <h2 className="card-title mb-4 text-primary">Basic Information</h2>
              <form onSubmit={handleProfileSubmit}>
                <div className="mb-3">
                  <label className="form-label">
                    <FaUser className="me-2 text-primary" /> Full Name
                  </label>
                  <input
                    type="text"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    className="form-control shadow-sm"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    <FaPhone className="me-2 text-primary" /> Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    className="form-control shadow-sm"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    <FaEnvelope className="me-2 text-primary" /> Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    className="form-control shadow-sm"
                    readOnly
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    <FaGlobe className="me-2 text-primary" /> Country
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="form-select shadow-sm"
                    required
                  >
                    <option value="">Select a country</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    <FaUserShield className="me-2 text-primary" /> Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="form-control shadow-sm"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100 shadow-sm">
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Change Password Tab */}
        <div className="tab-pane fade" id="change-password">
          <div className="card shadow-sm border-0 rounded">
            <div className="card-body">
              <h2 className="card-title mb-4 text-danger">Change Password</h2>
              <form  onSubmit={handlePasswordSubmit}> 
                

                <div className="mb-3">
                  <label className="form-label">
                    <FaLock className="me-2 text-danger" /> New Password
                  </label>
                  <input type="password" name="newPassword" value={passwordData.newPassword} onChange={handlePasswordChange} className="form-control shadow-sm" required />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    <FaLock className="me-2 text-danger" /> Confirm New Password
                  </label>
                  <input type="password" name="confirmPassword" value={passwordData.confirmPassword} onChange={handlePasswordChange} className="form-control shadow-sm" required />
                </div>

                <button type="submit" className="btn btn-danger w-100 shadow-sm">
                  Update Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
