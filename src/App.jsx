// src/App.js
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
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
import GoogleMeet from "./pages/GoogleMeet"; // Import Google Meet component
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user); // Set authenticated state
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
        <Route path="/" element={isAuthenticated ? <MainPage /> : <Navigate to="/login" />} />
        <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="/studentprofile" element={<StudentProfile />} />
        <Route path="/blogpage" element={<BlogPage />} />
        <Route path="/profilepage" element={<ProfilePage />} />
        <Route path="/buildresume" element={<BuildResume />} />
        <Route path="/googlemeet" element={<GoogleMeet />} /> {/* Add new route */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
