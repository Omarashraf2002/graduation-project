import { Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./Shared/SideBar";
import ApplicationDates from "./Pages/ApplicationDates";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SideBar />} />
        <Route path="AppDate" element={<ApplicationDates />} />
      </Routes>
    </div>
  );
}

export default App;
