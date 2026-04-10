import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js";
import { useEffect, useState } from "react";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function Dashboard() {
  const [dataPoints, setDataPoints] = useState([10, 20, 15, 25, 30]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDataPoints(prev => {
        const newData = [...prev.slice(1), Math.floor(Math.random() * 50)];
        return newData;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const data = {
    labels: ["1", "2", "3", "4", "5"],
    datasets: [
      {
        label: "Bot Traffic",
        data: dataPoints,
        borderColor: "#00ff9f",
        tension: 0.4
      }
    ]
  };

  return (
    <div style={{ padding: 30 }}>
      <h1 style={{ marginBottom: 20 }}>⚡ Botnet Control Panel</h1>

      <div style={{ display: "flex", gap: 20, marginBottom: 30 }}>
        <Card title="Total Devices" value="128" />
        <Card title="Active Bots" value="92" />
        <Card title="Threat Level" value="HIGH" color="red" />
      </div>

      <div style={{ background: "#020617", padding: 20, borderRadius: 10 }}>
        <h3 style={{ marginBottom: 10 }}>Live Traffic</h3>
        <Line data={data} />
      </div>
    </div>
  );
}

function Card({ title, value, color = "#00ff9f" }) {
  return (
    <div style={{
      background: "#020617",
      padding: 20,
      borderRadius: 10,
      width: 200,
      border: "1px solid #00ff9f"
    }}>
      <h4>{title}</h4>
      <p style={{ fontSize: 24, color }}>{value}</p>
    </div>
  );
}