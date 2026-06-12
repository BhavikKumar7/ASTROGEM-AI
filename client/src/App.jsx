import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/public/Home";
import Login from "./pages/public/Login";
import Signup from "./pages/public/Signup";

import Dashboard from "./pages/user/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/user/Profile";
import NewRecommendation from "./pages/user/NewRecommendation";
import RecommendationHistory from "./pages/user/RecommendationHistory";
import RecommendationDetails from "./pages/user/RecommendationDetails";

import AdminDashboard from "./pages/admin/AdminDashboard";
import Users from "./pages/admin/Users.jsx";
import UserDetails from "./pages/admin/UserDetails.jsx";
import UserConsultations from "./pages/admin/UserConsultations.jsx";

import wakeUpServer from "./services/wakeUpService";


function App() {

  useEffect(() => {
    wakeUpServer();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* User Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allowedRoles={["USER"]}>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute allowedRoles={["USER"]}>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/new-recommendation"
          element={
            <ProtectedRoute allowedRoles={["USER"]}>
              <NewRecommendation />
            </ProtectedRoute>
          }
        />

        <Route
          path="/recommendation-history"
          element={
            <ProtectedRoute allowedRoles={["USER"]}>
              <RecommendationHistory />
            </ProtectedRoute>
          }
        />

        <Route
          path="/recommendations/:id"
          element={
            <ProtectedRoute allowedRoles={["USER"]}>
              <RecommendationDetails />
            </ProtectedRoute>
          }
        />

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["ADMIN"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/users"
          element={
            <ProtectedRoute allowedRoles={["ADMIN"]}>
              <Users />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/users/:id"
          element={
            <ProtectedRoute allowedRoles={["ADMIN"]}>
              <UserDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/users/:id/consultations"
          element={
            <ProtectedRoute allowedRoles={["ADMIN"]}>
              <UserConsultations />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;