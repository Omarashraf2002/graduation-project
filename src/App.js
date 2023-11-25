import "./App.css";
import ApplicationDates from "./Pages/ApplicationDates";
import Header from "./Shared/Header";
import InquiryAboutAdmission from "./Pages/InquiryAboutAdmission";
import ApplicationForm from "./Pages/ApplicationForm";
import Login from "./Authentication/Login";
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";


function App() {
  const location = useLocation();

  // Check if the current location is the login route ("/login")
  const showHeader = location.pathname !== "/";

  return (
    <div className="App">
      {showHeader && <Header />}

      <Routes>
        {/* <Route path="/" element={<SideBar />} /> */}
        <Route path="/" element={<Login />} />
        <Route
          path="/InquiryAboutAdmission"
          element={<InquiryAboutAdmission />}
        />
        <Route path="/AppDate" element={<ApplicationDates />} />
        <Route path="/AppForm" element={<ApplicationForm />} />
      </Routes>
    </div>
  );
}

export default App;