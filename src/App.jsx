import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import RegisterForm from "./pages/RegisterForm";
import LoginForm from "./pages/LoginForm";
import Sidebar from "./components/Sidebar";
import Notifications from "./pages/Notifications";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import LightSwitch from "./components/LightSwitch";

function App() {
  return (
    <>
<Sidebar/>
<Navbar/>
{/* <LightSwitch/> */}
      <Routes>
        <Route path="/" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/dashboard" element={<HomePage/>} />
      </Routes>
    </>
  );
}

export default App;
