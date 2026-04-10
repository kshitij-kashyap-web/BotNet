import { useEffect, useState } from "react";

export default function Alerts() {
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const i = setInterval(() => setBlink(b => !b), 500);
    return () => clearInterval(i);
  }, []);

  return (
    <div style={{ padding: 30 }}>
      <h1>Alerts</h1>

      <p style={{ color: blink ? "red" : "transparent" }}>
        ⚠ DDoS Attack Detected
      </p>

      <p style={{ color: "orange" }}>
        ⚠ Suspicious Bot Activity
      </p>
    </div>
  );
}