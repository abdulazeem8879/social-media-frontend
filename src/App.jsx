import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import RegisterForm from "./pages/RegisterForm";
import LoginForm from "./pages/LoginForm";
import Sidebar from "./components/Sidebar";
import Notifications from "./pages/Notifications";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import LightSwitch from "./components/LightSwitch";
import { ToastContainer } from "react-toastify";

function App() {
  const location=useLocation()
  return (
    <>
    {location.pathname !=="/login" && <Sidebar/ > && location.pathname !=="/" && <Sidebar/ >
 }
{/* <Navbar/> */}
{/* <LightSwitch/> */}
      <Routes>
        <Route path="/" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/dashboard" element={<HomePage/>} />
      </Routes>
      <ToastContainer/>
    </>
  );
}

export default App;
