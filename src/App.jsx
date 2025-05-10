import React, { useEffect, useState } from 'react';
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import Contact from  "./components/Contact.jsx";
import AboutUs from  "./components/AboutUs.jsx";


function App() {
  const [authUser, setAuthUser] = useAuth();

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
  
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<AboutUs/>} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
