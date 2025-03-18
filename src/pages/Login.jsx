// import { useState } from "react";
// import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// // import { login } from "../services/apiAuth";
// import supabase from "../helper/supabaseClient";
// import { Link } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify"; // Import react-toastify
// import "react-toastify/dist/ReactToastify.css"; // Import toast styles
// // import Spinner from "../components/Spinner";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   // const [loading, setLoading] = useState(false)

//   const navigate = useNavigate();

//   // if(loading) return <Spinner/>

//   async function handleSubmit(e) {

//     e.preventDefault();
//     if (!email || !password) {
//       toast.error("Please fill in both email and password.");
//       return;
//     }

//     try {
//       // Supabase authentication calls

//       const { data, error } = await supabase.auth.signInWithPassword({
//         email: email,
//         password: password,
//       });

//       if (error) {

//         throw new Error(error.message || "Login failed");
//       }

//       if (data?.user) {

//         toast.success("Login successful!");
//         navigate("/app/dashboard", { replace: true });
//       } else {
//         toast.error("Unexpected error, please try again.");
//       }
//     } catch (error) {
//       // Display error message

//       toast.error(error.message || "Wrong Login Details. Please check your credentials");
//       console.error("Login error:", error);
//     } finally {
//       // Clear email and password input fields
//       setEmail("");
//       setPassword("");
//     }

//   }

//   return (
//     <div className="bg-primary vh-100 d-flex align-items-center">
//       <Container>
//         <ToastContainer

//         position="top-center"
//         autoClose={2000}
//         newestOnTop={false}
//         closeOnClick

//         pauseOnFocusLoss
//         draggable
//         pauseOnHover/>
//         <Row className="justify-content-center">
//           <Col xl={8} lg={10} md={9}>
//             <Card className="o-hidden border-0 shadow-lg my-5">
//               <Row className="g-0">
//                 {/* Left Image (Hidden on Small Screens) */}
//                 <Col lg={6} className="d-none d-lg-block bg-light">
//                   <div
//                     className="w-100 h-100"
//                     style={{
//                       background: "url('/Login-cuate.png')",
//                       backgroundSize: "cover",
//                       backgroundPosition: "center",
//                     }}
//                   ></div>
//                 </Col>

//                 {/* Login Form */}
//                 <Col lg={6}>
//                   <Card.Body className="p-5">
//                     <div className="text-center">
//                       <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
//                     </div>
//                     <Form className="user" onSubmit={handleSubmit}>
//                       <Form.Group className="mb-3">
//                         <Form.Control
//                           type="email"
//                           id="email"
//                           onChange={(e) => setEmail(e.target.value)}
//                           value={email}
//                           className="form-control-user"
//                           placeholder="Enter Email Address"
//                         />
//                       </Form.Group>
//                       <Form.Group className="mb-3">
//                         <Form.Control
//                           type="password"
//                           id="password"
//                           onChange={(e) => setPassword(e.target.value)}
//                           value={password}
//                           className="form-control-user"
//                           placeholder="Enter Password"
//                         />
//                       </Form.Group>
//                       <Form.Group className="mb-3 d-flex align-items-center">
//                         <Form.Check type="checkbox" id="customCheck" label="Remember Me" />
//                       </Form.Group>
//                       <Button variant="primary" className="btn-user btn-block" type="submit">
//                         Login
//                       </Button>
//                       <hr />
//                       <Button variant="danger" className="btn-user btn-block">
//                         <i className="fab fa-google fa-fw"></i> Login with Google
//                       </Button>
//                     </Form>
//                     <hr />
//                     <div className="text-center">
//                       <Link to="/forgot-password" className="small">
//                         Forgot Password?
//                       </Link>
//                     </div>
//                     <div className="text-center">
//                       <Link to="/signup" className="small">
//                         Create an Account!
//                       </Link>
//                     </div>
//                   </Card.Body>
//                 </Col>
//               </Row>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default Login;

import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  InputGroup,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import supabase from "../helper/supabaseClient";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons from react-icons

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to manage password visibility
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in both email and password.");
      return;
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        throw new Error(error.message || "Login failed");
      }

      if (data?.user) {
        toast.success("Login successful!");
        navigate("/app/dashboard", { replace: true });
      } else {
        toast.error("Unexpected error, please try again.");
      }
    } catch (error) {
      toast.error(
        error.message || "Wrong Login Details. Please check your credentials"
      );
      console.error("Login error:", error);
    } finally {
      setEmail("");
      setPassword("");
    }
  }

  return (
    <div className="bg-primary vh-100 d-flex align-items-center">
      <Container>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Row className="justify-content-center">
          <Col xl={8} lg={10} md={9}>
            <Card className="o-hidden border-0 shadow-lg my-5">
              <Row className="g-0">
                {/* Left Image (Hidden on Small Screens) */}
                <Col lg={6} className="d-none d-lg-block bg-light">
                  <div
                    className="w-100 h-100"
                    style={{
                      background: "url('/Login-cuate.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                </Col>

                {/* Login Form */}
                <Col lg={6}>
                  <Card.Body className="p-5">
                    <div className="text-center">
                      <Link to="/">
                        <img
                          src="./Logo.png"
                          alt="logo"
                          style={{ width: "100px", marginBottom: "20px" }}
                        />
                      </Link>
                      <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                    </div>
                    <Form className="user" onSubmit={handleSubmit}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="email"
                          id="email"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          className="form-control-user"
                          placeholder="Enter Email Address"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <InputGroup>
                          <Form.Control
                            type={showPassword ? "text" : "password"} // Toggle between text and password
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className="form-control-user"
                            placeholder="Enter Password"
                          />
                          <Button
                            variant="outline-primary"
                            onClick={() => setShowPassword(!showPassword)} // Toggle visibility
                            style={{ cursor: "pointer" }}
                          >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}{" "}
                            {/* Toggle eye icons */}
                          </Button>
                        </InputGroup>
                      </Form.Group>
                      <Form.Group className="mb-3 d-flex align-items-center">
                        <Form.Check
                          type="checkbox"
                          id="customCheck"
                          label="Remember Me"
                        />
                      </Form.Group>
                      <Button
                        variant="primary"
                        className="btn-user btn-block"
                        type="submit"
                      >
                        Login
                      </Button>
                      <hr />
                      <Link
                        to="/signup"
                        className="small"
                        style={{ textDecoration: "none" }}
                      >
                        <Button variant="danger" className="btn-user btn-block">
                          <i className="fab  fa-fw"></i> Create an Account
                        </Button>
                      </Link>
                    </Form>
                    <hr />
                    <div className="text-center">
                      <Link to="/password-reset" className="small">
                        Forgot Password?
                      </Link>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
