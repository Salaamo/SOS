import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const userDetails = {
      Email,
      Password,
    };
    console.log("UserDetails", userDetails);

    try {
      const response = await axios.post(
        "http://localhost:4000/Api/User/login",
        userDetails
      );
      console.log(response.data);
      if (response.data.status === "success") {
        alert(response.data.message);
        console.log("Token", response.data.generateToken)
        localStorage.setItem("token", response.data.generateToken)
        navigate("/dashboard")
      }
    } catch (error) {
      console.log("Error Logging In", error);
      alert("Error Logging in")
    }
  };

  const message = "Don't have an account"
  return (
    <div className="w-full">
      <h1 className="text-primary text-center fs-2">Log In</h1>
      <div className="col-10 col-md-8 col-lg-6 mx-auto">
        <form
          onSubmit={handleSubmit}
          action=""
          className=" mx-auto shadow p-4 ml-5"
          style={{ width: "500px" }}
        >
          <input
            type="email"
            onChange={(ev) => setEmail(ev.target.value)}
            placeholder="Enter Email"
            className="form-control my-2"
          />
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(ev) => setPassword(ev.target.value)}
            className="form-control my-2"
          />
          <p>
            {message} <Link to="/sign-up">Sign Up</Link>
          </p>
          <button type="submit" className="btn btn-primary">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
