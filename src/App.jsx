import React, { useEffect, useState } from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"; // Change to HashRouter
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import FeedbackForm from "./pages/FeedbackForm";
import MainPage from "./pages/Mainpage";
import StudentProfile from "./pages/StudentProfile";
import BuildResume from "./pages/BuildResume";
import ProfilePage from "./pages/ProfilePage";
import BlogPage from "./pages/BlogPage";
import Signup from "./pages/Signup";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";
import ProtectedRoute from "./components/ProtectedRoute"; // Import the ProtectedRoute component

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false); // Track email verification status
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
        setEmailVerified(user.emailVerified); // Check if email is verified
        if (!user.emailVerified) {
          signOut(auth); // Sign out if email is not verified
          alert("Please verify your email address before logging in.");
        }
      } else {
        setIsAuthenticated(false);
      }
      setLoading(false); // Stop loading once we have the auth state
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    // Show a loading indicator or a blank screen while checking auth state
    return <div>Loading...</div>; // You can replace this with a spinner or any loading component
  }

  return (
    <Router>
      <Header />
      <Routes>
        {/* Route for home page, accessible only if authenticated and email is verified */}
        <Route
          path="/"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} emailVerified={emailVerified}>
              <MainPage />
            </ProtectedRoute>
          }
        />

        {/* Login route */}
        <Route
          path="/login"
          element={
            isAuthenticated && emailVerified ? (
              <Navigate to="/" />
            ) : (
              <Login setIsAuthenticated={setIsAuthenticated} />
            )
          }
        />

        {/* Signup and other routes */}
        <Route path="/signup" element={<Signup />} />
        
        {/* Protecting the Feedback route */}
        <Route
          path="/feedback"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} emailVerified={emailVerified}>
              <FeedbackForm />
            </ProtectedRoute>
          }
        />

        <Route
          path="/studentprofile"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} emailVerified={emailVerified}>
              <StudentProfile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/blogpage"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} emailVerified={emailVerified}>
              <BlogPage />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/profilepage"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} emailVerified={emailVerified}>
              <ProfilePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/buildresume"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} emailVerified={emailVerified}>
              <BuildResume />
            </ProtectedRoute>
          }
        />

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
