import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Devices from "./pages/Devices";
import Alerts from "./pages/Alerts";

export default function App() {
  return (
    <div style={{ background: "#0f172a", minHeight: "100vh", color: "white" }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/devices" element={<Devices />} />
          <Route path="/alerts" element={<Alerts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}