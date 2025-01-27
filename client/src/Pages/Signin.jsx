import { TextInput, Button } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { showSuccessToast, showErrorToast } from "../ReactToasty";
import { ToastContainer } from "react-toastify";
import { useApi } from "../context/ContextApi"; 
import Autho from "./Autho";
import { useNavigate } from "react-router-dom";
export default function Signin() {
  
  const navigate = useNavigate();
  const { apiRequest } = useApi(); 
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiRequest("/login", "POST", formData);
      console.log(response);
      showSuccessToast("User logged in successfully!");
      setFormData({ email: "", password: "" });
      navigate("/dashboard")

    } catch (err) {
      console.error(err);
      showErrorToast(err.message || "Something went wrong");
      setFormData({ email: "", password: "" });
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex gap-4 max-w-3xl md:items-center mx-auto flex-col md:flex-row">
        <div className="flex-1">
          <Link to="/" className="font-semibold sm:text-4xl text-3xl">
            <span className="px-2 py-1 bg-gradient-to-r from-teal-400 to-blue-500 text-dark rounded-md">
              Sai&#39;s
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            You can sign in with your email and password or with Google.
          </p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold text-center">Sign In</h2>
            <div>
              <label htmlFor="email">Email</label>
              <TextInput
                type="email"
                name="email"
                id="email"
                placeholder="email@.com"
                onChange={handleChange}
                value={formData.email}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <TextInput
                type="password"
                name="password"
                id="password"
                placeholder="******"
                onChange={handleChange}
                value={formData.password}
              />
            </div>
            <Button
              className="bg-gradient-to-r from-teal-400 to-blue-500 text-white"
              type="submit"
            >
              Sign In
            </Button>
            <Autho />
          </form>
          <div className="text-md pt-5">
            <span>Don&#39;t have an account? </span>
            <Link to="/signup" className="text-blue-500 font-bold">
              Sign Up
            </Link>
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}
