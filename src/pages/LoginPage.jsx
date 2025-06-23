import { useFormik } from "formik";
import React, { useState } from "react";
import {
  HiEye,
  HiEyeOff,
  HiOutlineLockClosed,
  HiOutlineMail,
} from "react-icons/hi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { setUser } from "../redux/userSlice";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(
    localStorage.getItem("rememberMe") === "true" || false
  );

  // Check if user credentials are saved
  const savedEmail = localStorage.getItem("savedEmail") || "";
  const savedPassword = localStorage.getItem("savedPassword") || "";

  const formik = useFormik({
    initialValues: {
      email: savedEmail,
      password: savedPassword,
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().min(4, "Too Short!").required("Required"),
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const mockUser = {
          email: "test@gmail.com",
          password: "Password@123",
          name: "Test User",
        };

        if (
          values.email === mockUser.email &&
          values.password === mockUser.password
        ) {
          // Save credentials if remember me is checked
          if (rememberMe) {
            localStorage.setItem("savedEmail", values.email);
            localStorage.setItem("savedPassword", values.password);
            localStorage.setItem("rememberMe", "true");
          } else {
            localStorage.removeItem("savedEmail");
            localStorage.removeItem("savedPassword");
            localStorage.removeItem("rememberMe");
          }

          dispatch(
            setUser({
              name: mockUser.name,
              email: mockUser.email,
              token: "mock-jwt-token",
            })
          );

          // Store auth token in localStorage
          localStorage.setItem("authToken", "mock-jwt-token");

          toast.success("Login successful!");
          navigate("/home");
        } else {
          throw new Error("Invalid credentials");
        }
      } catch (error) {
        toast.error(error.message || "Login failed. Please try again.");
      } finally {
        setIsLoading(false);
      }
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black font-inter">
      <div className="flex w-full max-w-3xl shadow-2xl rounded-2xl overflow-hidden bg-white/30 border border-white/30">
        {/* Left Panel */}
        <div className="w-full md:w-1/2 p-10 text-white">
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-gradient-flow">
            Welcome back!
          </h2>
          <p className="text-sm text-white mb-6">
            Simplify your e-invoice with efit with minimal cost!
          </p>

          <form onSubmit={formik.handleSubmit}>
            {/* Email */}
            <div className="relative mb-4">
              <HiOutlineMail className="absolute top-4 left-3 text-gray-800" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="pl-10 w-full p-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.errors.email && formik.touched.email && (
                <p className="text-red-500 text-xs mt-1">
                  {formik.errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="relative mb-2">
              <HiOutlineLockClosed className="absolute top-4 left-3 text-gray-800" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="pl-10 w-full p-2 border  text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 pr-10"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              <button
                type="button"
                className="absolute top-4 right-3 text-gray-400"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <HiEyeOff /> : <HiEye />}
              </button>
              {formik.errors.password && formik.touched.password && (
                <p className="text-red-500 text-xs mt-1">
                  {formik.errors.password}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center text-sm cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span className="ml-2">Remember me</span>
              </label>
              <div className="text-sm text-blue-600 hover:underline cursor-pointer">
                Forgot Password?
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-black text-white py-3 rounded-lg hover:from-pink-500 hover:to-indigo-500 transition duration-300 flex justify-center items-center ${
                isLoading ? "opacity-75 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </>
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>

        {/* Right Panel - Unchanged */}
        <div className="hidden md:flex w-1/2 bg-white/10 flex-col justify-between items-center p-10 text-white text-center">
          <div>
            <img
              src="/assets/Invoice-cuate.png"
              alt="Invoice illustration"
              className="w-74 mb-6"
            />
          </div>
          {/* <div className="text-xs text-white">
            Made with ❤️ by{" "}
            <span className="font-medium text-white/80">WDS</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
