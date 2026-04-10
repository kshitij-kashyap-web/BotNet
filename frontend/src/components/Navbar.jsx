import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{
      background: "#020617",
      padding: "15px 30px",
      display: "flex",
      gap: "30px",
      borderBottom: "1px solid #1e293b"
    }}>
      <Link to="/" style={{ color: "#38bdf8" }}>Dashboard</Link>
      <Link to="/devices" style={{ color: "#38bdf8" }}>Devices</Link>
      <Link to="/alerts" style={{ color: "#38bdf8" }}>Alerts</Link>
    </nav>
  );
}