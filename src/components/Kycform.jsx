// import { useState } from "react";
// import supabase from '../helper/supabaseClient';

// const KycForm = () => {
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const formData = new FormData(e.target);
//     const formObject = Object.fromEntries(formData.entries());

//     try {
//       // Get files from the form inputs
//       const frontImgFile = e.target.frontimg.files[0];
//       const backImgFile = e.target.backimg.files[0];

//       // Ensure that files are selected
//       if (!frontImgFile || !backImgFile) {
//         alert("Please upload both front and back images.");
//         return;
//       }

//       // Log file details
//       console.log("Front image file:", frontImgFile);
//       console.log("Back image file:", backImgFile);

//       // Upload front image
//       const frontImgPath = `public/front_${frontImgFile.name}`;
//       console.log("Uploading front image to path:", frontImgPath);
//       const { data: frontImgData, error: frontImgError } = await supabase
//         .storage
//         .from('kycdoc')
//         .upload(frontImgPath, frontImgFile);

//         if (frontImgError) {
//           if (frontImgError.message.includes("The resource already exists")) {
//             alert("You already submitted a request");
//           } else {
//             console.error("Front image upload error:", frontImgError.message);
//           }
//           throw frontImgError;
//         }

//       console.log("Front image uploaded successfully:", frontImgData);

//       // Upload back image
//       const backImgPath = `public/_back${backImgFile.name}`;
//       console.log("Uploading back image to path:", backImgPath);
//       const { data: backImgData, error: backImgError } = await supabase
//         .storage
//         .from('kycdoc')
//         .upload(backImgPath, backImgFile);

//       if (backImgError) {
//         console.error("Back image upload error:", backImgError.message);
//         throw backImgError;
//       }

//       console.log("Back image uploaded successfully:", backImgData);

//       // Insert form data into Supabase table
//       console.log("Inserting form data into database...");
//       const { data, error } = await supabase
//         .from('kyc')
//         .insert([
//           {
//             first_name: formObject.first_name,
//             last_name: formObject.last_name,
//             email: formObject.email,
//             phone_number: formObject.phone_number,
//             dob: formObject.dob,
//             social_media: formObject.social_media,
//             address: formObject.address,
//             city: formObject.city,
//             state: formObject.state,
//             country: formObject.country,
//             document_type: formObject.document_type,
//             frontimg_url: frontImgData.Key,
//             backimg_url: backImgData.Key,
//           },
//         ])
//         .select();

//       if (error) {
//         if (error.message.includes("the resource already exists")) {
//           alert("You already submitted a request");
//         }
//         else {
//         console.error("Error inserting form data:", error.message);
//       }
//         throw error;
//       }

//       console.log("Form submitted successfully!", data);
//       alert("KYC form submitted successfully!");
//     } catch (error) {
//       console.error("Error submitting form:", error.message);
//       alert("Error submitting form. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container-fluid mb-5">
//       <div className="row">
//         <div className="col-md-12">
//           <div className="card">
//             <div className="card-body">
//               <div className="mb-5 row">
//                 <div className="col-lg-8 offset-lg-2 col-sm-12">
//                   {/* Form Header */}
//                   <div className="p-3 text-center">
//                     <h2>Begin your ID-Verification</h2>
//                     <p>
//                       To comply with regulation, each participant will have to go through identity
//                       verification (KYC/AML) to prevent fraud causes.
//                     </p>
//                   </div>
import { useState } from "react";
import supabase from "../helper/supabaseClient";
import { ToastContainer, toast } from "react-toastify"; // Import toast and ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for styling

const KycForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData.entries());

    try {
      // Get files from the form inputs
      const frontImgFile = e.target.frontimg.files[0];
      const backImgFile = e.target.backimg.files[0];

      // Ensure that files are selected
      if (!frontImgFile || !backImgFile) {
        toast.error("Please upload both front and back images."); // Toast for missing files
        setLoading(false);
        return;
      }

      // Upload front image
      const frontImgPath = `kyc_documents/${Date.now()}_front_${
        frontImgFile.name
      }`;
      const { data: frontImgData, error: frontImgError } =
        await supabase.storage
          .from("kycdoc")
          .upload(frontImgPath, frontImgFile);

      if (frontImgError) {
        if (frontImgError.message.includes("The resource already exists")) {
          toast.warning("You already submitted a request."); // Toast for duplicate submission
        } else {
          toast.error("Front image upload failed. Please try again."); // Toast for upload error
        }
        throw frontImgError;
      }

      // Upload back image
      const backImgPath = `kyc_documents/${Date.now()}_back_${
        backImgFile.name
      }`;
      const { data: backImgData, error: backImgError } = await supabase.storage
        .from("kycdoc")
        .upload(backImgPath, backImgFile);

      if (backImgError) {
        toast.error("Back image upload failed. Please try again."); // Toast for upload error
        throw backImgError;
      }

      // Insert form data into Supabase table
      const { data, error } = await supabase
        .from("kyc")
        .insert([
          {
            first_name: formObject.first_name,
            last_name: formObject.last_name,
            email: formObject.email,
            phone_number: formObject.phone_number,
            dob: formObject.dob,
            social_media: formObject.social_media,
            address: formObject.address,
            city: formObject.city,
            state: formObject.state,
            country: formObject.country,
            document_type: formObject.document_type,
            frontimg_url: frontImgData.Key,
            backimg_url: backImgData.Key,
          },
        ])
        .select();

      if (error) {
        if (error.message.includes("the resource already exists")) {
          toast.warning("You already submitted a request."); // Toast for duplicate submission
        } else {
          toast.error("Error submitting form. Please try again."); // Toast for database error
        }
        throw error;
      }

      // Success toast
      toast.success("KYC form submitted successfully!");
      console.log("Form submitted successfully!", data);
    } catch (error) {
      console.error("Error submitting form:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid mb-5">
      {/* Toast Container */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="mb-5 row">
                <div className="col-lg-8 offset-lg-2 col-sm-12">
                  {/* Form Header */}
                  <div className="p-3 text-center">
                    <h2>Begin your ID-Verification</h2>
                    <p>
                      To comply with regulation, each participant will have to
                      go through identity verification (KYC/AML) to prevent
                      fraud causes.
                    </p>
                  </div>

                  {/* Form Container */}
                  <div className="p-2 shadow-lg">
                    <div className="p-4 row">
                      <form onSubmit={handleSubmit}>
                        <input type="hidden" />

                        {/* Personal Details Section */}
                        <div className="col-12 border-bottom">
                          <h5>Personal Details</h5>
                          <p>
                            Your simple personal information required for
                            identification
                          </p>
                        </div>
                        <div className="col-12">
                          <small>
                            Please type carefully and fill out the form with
                            your personal details. You can’t edit these details
                            once you submit the form.
                          </small>
                        </div>
                        <div className="mt-4 col-12">
                          <div className="row">
                            <div className="mb-2 col-md-6">
                              <label htmlFor="firstname">
                                First name{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                name="first_name"
                                className="form-control"
                                required
                              />
                            </div>
                            <div className="mb-2 col-md-6">
                              <label htmlFor="lastname">
                                Last name <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                name="last_name"
                                className="form-control"
                                required
                              />
                            </div>
                            <div className="mb-2 col-md-6">
                              <label htmlFor="email">
                                Email <span className="text-danger">*</span>
                              </label>
                              <input
                                type="email"
                                name="email"
                                className="form-control"
                                required
                              />
                            </div>
                            <div className="mb-2 col-md-6">
                              <label htmlFor="phone_number">
                                Phone Number{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                name="phone_number"
                                className="form-control"
                                required
                              />
                            </div>
                            <div className="mb-2 col-md-6">
                              <label htmlFor="dob">
                                Date of birth{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="date"
                                name="dob"
                                className="form-control"
                                required
                              />
                            </div>
                            <div className="mb-2 col-md-6">
                              <label htmlFor="social_media">
                                Twitter or Facebook username
                              </label>
                              <input
                                type="text"
                                name="social_media"
                                className="form-control"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Address Section */}
                        <div className="pt-3 mt-3 col-12 border-bottom border-top">
                          <h5>Your Address</h5>
                          <p>
                            Your simple location information required for
                            identification
                          </p>
                        </div>
                        <div className="mt-4 col-12">
                          <div className="row">
                            <div className="mb-2 col-md-6">
                              <label htmlFor="address">
                                Address line{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                name="address"
                                className="form-control"
                                required
                              />
                            </div>
                            <div className="mb-2 col-md-6">
                              <label htmlFor="city">
                                City <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                name="city"
                                className="form-control"
                                required
                              />
                            </div>
                            <div className="mb-2 col-md-6">
                              <label htmlFor="state">
                                State <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                name="state"
                                className="form-control"
                                required
                              />
                            </div>
                            <div className="mb-2 col-md-6">
                              <label htmlFor="country">
                                Nationality{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                name="country"
                                className="form-control"
                                required
                              />
                            </div>
                          </div>
                        </div>

                        {/* Document Upload Section */}
                        <div className="pt-3 mt-3 col-12 border-bottom border-top">
                          <h5>Document Upload</h5>
                          <p>
                            Your simple personal document required for
                            identification
                          </p>
                        </div>
                        <div className="mt-4 col-12">
                          <div className="row">
                            <div className="mb-2 col-md-12">
                              <div
                                className="flex-wrap d-flex justify-content-around"
                                data-toggle="buttons"
                              >
                                <label className="mb-2 shadow-sm btn btn-primary active">
                                  <i className="fas fa-atlas"></i>
                                  <input
                                    type="radio"
                                    name="document_type"
                                    value="Int'l Passport"
                                    autoComplete="off"
                                    defaultChecked
                                  />{" "}
                                  Int&apos;l Passport
                                </label>
                                <label className="mb-2 shadow-sm btn btn-primary">
                                  <i className="fas fa-flag"></i>
                                  <input
                                    type="radio"
                                    name="document_type"
                                    value="National ID"
                                    autoComplete="off"
                                  />{" "}
                                  National ID
                                </label>
                                <label className="mb-2 shadow-sm btn btn-primary">
                                  <i className="fas fa-address-card"></i>
                                  <input
                                    type="radio"
                                    name="document_type"
                                    value="Drivers License"
                                    autoComplete="off"
                                  />{" "}
                                  Drivers License
                                </label>
                              </div>
                              <div className="mt-4">
                                <h6 className="font-weight-bold">
                                  To avoid delays when verifying your account,
                                  please ensure your document meets the criteria
                                  below:
                                </h6>
                                <ul className="list-group">
                                  <li>
                                    <i className="fas fa-check-square text-primary"></i>{" "}
                                    Chosen credential must not have expired.
                                  </li>
                                  <li>
                                    <i className="fas fa-check-square text-primary"></i>{" "}
                                    Document should be in good condition and
                                    clearly visible.
                                  </li>
                                  <li>
                                    <i className="fas fa-check-square text-primary"></i>{" "}
                                    Make sure there is no light glare on the
                                    document.
                                  </li>
                                </ul>
                              </div>
                              <p className="mt-3 text-black h6">
                                Upload front side{" "}
                                <span className="text-danger">*</span>
                              </p>
                              <div className="mt-3 align-items-center justify-content-around d-md-flex">
                                <div className="p-2 border p-md-5">
                                  <div className="custom-file">
                                    <input
                                      type="file"
                                      name="frontimg"
                                      className="form-control"
                                      required
                                    />
                                  </div>
                                </div>
                                <div className="text-center">
                                  <i className="fas fa-id-card fa-6x"></i>
                                </div>
                              </div>
                              <hr />
                              <p className="mt-3 text-black h6">
                                Upload back side{" "}
                                <span className="text-danger">*</span>
                              </p>
                              <div className="mt-3 align-items-center justify-content-around d-md-flex">
                                <div className="p-2 border p-md-5">
                                  <div className="custom-file">
                                    <input
                                      type="file"
                                      name="backimg"
                                      className="form-control"
                                      required
                                    />
                                  </div>
                                </div>
                                <div className="text-center">
                                  <i className="fas fa-credit-card-blank fa-6x"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Agreement and Submit Button */}
                        <div className="mt-3 col-12">
                          <div className="mb-2 form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="defaultCheck1"
                              required
                            />
                            <label
                              className="form-check-label"
                              htmlFor="defaultCheck1"
                            >
                              All the information I have entered is correct.
                            </label>
                          </div>
                          <button
                            type="submit"
                            className="px-4 btn btn-primary"
                            disabled={loading}
                          >
                            {loading ? "Submitting..." : "Submit Application"}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KycForm;
