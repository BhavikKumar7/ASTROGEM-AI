import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    loading,
    error,
    user,
    isAuthenticated
  } = useSelector(
    state => state.auth
  );

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email.trim()) {
      setEmailError(
        "Email is required"
      );
      return;
    }

    if (!emailRegex.test(formData.email.trim())) {
      setEmailError(
        "Please enter a valid email address"
      );
      return;
    }

    setEmailError("");
    dispatch(login(formData));
  };

  useEffect(() => {
    if (
      isAuthenticated && user
    ) {
      if (user.role === "ADMIN") {
        navigate(
          "/admin"
        );
      }
      else {
        navigate(
          "/dashboard"
        );
      }
    }
  }, [
    isAuthenticated,
    user,
    navigate
  ]);

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center px-6">
      <div className="
            bg-white
            w-full
            max-w-md
            rounded-3xl
            shadow-xl
            p-10
            ">
        <div className="
                flex
                flex-col
                items-center
                mb-8
                ">
          <img
            src="/logo.png"
            alt="AstroGem AI"
            className="
                        w-24
                        h-24
                        object-contain
                        "
          />
          <h1 className="
                    text-4xl
                    font-bold
                    text-blue-700
                    mt-4
                    ">
            AstroGem AI
          </h1>
          <p className="
                    text-gray-500
                    mt-2
                    ">
            Welcome Back
          </p>
        </div>

        {
          error &&
          <div className="
                    bg-red-100
                    border
                    border-red-300
                    text-red-600
                    p-3
                    rounded-xl
                    mb-5
                    text-center
                    ">
            {error}

          </div>
        }

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label className="
                        block
                        text-gray-700
                        mb-2
                        font-medium
                        ">
              Email
            </label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  email: e.target.value
                });
                setEmailError("");
              }}
              placeholder="Enter your email"
              className="
                            w-full
                            px-5
                            py-3
                            border
                            border-blue-200
                            rounded-xl
                            focus:outline-none
                            focus:ring-2
                            focus:ring-blue-500
                            "
              required
            />
            {
              emailError && (
                <p className="mt-2 text-red-500 text-sm">
                  {emailError}
                </p>
              )
            }
          </div>

          <div>
            <label className="
    block
    text-gray-700
    mb-2
    font-medium
    ">
              Password
            </label>
            <div className="relative">
              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="
            w-full
            px-5
            py-3
            pr-14
            border
            border-blue-200
            rounded-xl
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            "
                required
              />
              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            text-gray-500
            hover:text-blue-600
            "
              >
                {
                  showPassword
                    ? <FaEyeSlash />
                    : <FaEye />
                }
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="
                        w-full
                        bg-blue-600
                        hover:bg-blue-700
                        disabled:bg-blue-400
                        text-white
                        py-3
                        rounded-xl
                        font-semibold
                        duration-300
                        "
          >
            {
              loading
                ? "Logging in..."
                : "Login"
            }
          </button>
        </form>

        <div className="
                text-center
                mt-8
                ">
          <p className="
                    text-gray-600
                    ">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="
                            text-blue-600
                            font-semibold
                            hover:text-blue-800
                            "
            >
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;