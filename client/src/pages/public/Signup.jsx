import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/authSlice";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
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

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [validationError, setValidationError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    birthTime: "",
    birthCity: "",
    birthDistrict: "",
    birthState: "",
    birthCountry: "",
    latitude: "",
    longitude: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value
    });
    setValidationError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!emailRegex.test(formData.email)) {
      setValidationError(
        "Please enter a valid email address"
      );
      return;
    }

    if (!passwordRegex.test(formData.password)) {
      setValidationError(
        "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character."
      );
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setValidationError(
        "Passwords do not match"
      );
      return;
    }

    dispatch(
      register(formData)
    );
  };

  useEffect(() => {
    if (isAuthenticated && user) {
      if (user.role === "ADMIN") {
        navigate(
          "/admin/dashboard"
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

    <div className="min-h-screen bg-blue-50 flex items-center justify-center px-6 py-10">
      <div className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-5xl">
        {/* Header */}
        <div className="text-center mb-10">
          <img
            src="/logo.png"
            alt="AstroGem AI"
            className="w-24 h-24 mx-auto object-contain"
          />
          <h1 className="text-4xl font-bold text-blue-700 mt-4">
            Create Account
          </h1>
          <p className="text-gray-500 mt-2">
            Begin your Vedic astrology journey
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full border border-blue-200 rounded-xl px-5 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* DOB */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Date of Birth
              </label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="w-full border border-blue-200 rounded-xl px-5 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Birth Time */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Birth Time
              </label>
              <input
                type="time"
                name="birthTime"
                value={formData.birthTime}
                onChange={handleChange}
                className="w-full border border-blue-200 rounded-xl px-5 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* City */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Birth City
              </label>
              <input
                type="text"
                name="birthCity"
                value={formData.birthCity}
                onChange={handleChange}
                placeholder="Enter your birth city"
                className="w-full border border-blue-200 rounded-xl px-5 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* District */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Birth District
              </label>
              <input
                type="text"
                name="birthDistrict"
                value={formData.birthDistrict}
                onChange={handleChange}
                placeholder="Enter your birth district"
                className="w-full border border-blue-200 rounded-xl px-5 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* State */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Birth State
              </label>
              <input
                type="text"
                name="birthState"
                value={formData.birthState}
                onChange={handleChange}
                placeholder="Enter your birth state"
                className="w-full border border-blue-200 rounded-xl px-5 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Country */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Birth Country
              </label>
              <input
                type="text"
                name="birthCountry"
                value={formData.birthCountry}
                onChange={handleChange}
                placeholder="Enter your birth country"
                className="w-full border border-blue-200 rounded-xl px-5 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Latitude */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Latitude
              </label>
              <input
                type="number"
                step="any"
                name="latitude"
                value={formData.latitude}
                onChange={handleChange}
                placeholder="Enter latitude of birth place"
                className="w-full border border-blue-200 rounded-xl px-5 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Longitude */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Longitude
              </label>
              <input
                type="number"
                step="any"
                name="longitude"
                value={formData.longitude}
                onChange={handleChange}
                placeholder="Enter longitude of birth place"
                className="w-full border border-blue-200 rounded-xl px-5 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Email
              </label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="w-full border border-blue-200 rounded-xl px-5 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Password
              </label>

              <div className="relative">

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="********"
                  className="w-full border border-blue-200 rounded-xl px-5 py-3 pr-14 focus:ring-2 focus:ring-blue-500 outline-none "
                />
                <button
                  type="button"
                  className=" absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 "
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                >
                  {
                    showPassword ? <FaEyeSlash /> : <FaEye />
                  }
                </button>

              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Re-enter password"
                  className=" w-full border border-blue-200 rounded-xl px-5 py-3 pr-14 focus:ring-2 focus:ring-blue-500 outline-none "
                />
                <button
                  type="button"
                  className=" absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 "
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                >
                  {
                    showConfirmPassword
                      ? <FaEyeSlash />
                      : <FaEye />
                  }
                </button>
              </div>
            </div>
          </div>

          {(validationError || error) && (
            <div className="mt-8 space-y-4">
              {
                validationError &&
                <div className=" bg-red-100 border border-red-300 text-red-600 p-3 rounded-xl text-center ">
                  {validationError}
                </div>
              } {
                error &&
                <div className=" bg-red-100 border border-red-300 text-red-600 p-3 rounded-xl text-center ">
                  {error}
                </div>
              }
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className=" mt-8 w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-4 rounded-xl font-semibold text-lg duration-300 "
          >
            {
              loading
                ? "Creating Account..."
                : "Create Account"
            }
          </button>
        </form>

        {/* Login */}
        <div className="text-center mt-8">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 font-semibold hover:text-blue-800"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Signup;