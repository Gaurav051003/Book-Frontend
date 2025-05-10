import React, { useEffect, useState } from 'react';
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import Courses from "./courses/Courses";



function App() {
  const [authUser, setAuthUser] = useAuth();

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white min-h-screen">
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={authUser ? <Courses /> : <Navigate to="/signup" />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

        <Toaster />
      </div>
    </>
  );
}

export default App;
