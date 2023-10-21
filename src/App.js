import { Route, Routes } from "react-router-dom";
import "./App.css";
import ApplicationDates from "./Pages/ApplicationDates";
import Header from "./Shared/Header";
import InquiryAboutAdmission from "./Pages/InquiryAboutAdmission";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <Route path="/" element={<SideBar />} /> */}
        <Route
          path="InquiryAboutAdmission"
          element={<InquiryAboutAdmission />}
        />
        <Route path="AppDate" element={<ApplicationDates />} />
      </Routes>
    </div>
  );
}

export default App;
