import React from "react";

const SignalCard = ({ data }) => {
  if (!data) return null;

  let indicatorColor = "#999"; // oletusväri harmaa
  if (data.signal === "BUY") indicatorColor = "#4caf50";      // vihreä
  else if (data.signal === "SELL") indicatorColor = "#ff1744"; // punainen
  else if (data.signal === "BOS") indicatorColor = "#ff9100";  // oranssi

  return (
    <div style={{
      position: "relative",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      background: "rgba(255, 255, 255, 0.05)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      borderRadius: "20px",
      padding: "24px",
      color: "#fff",
      width: "320px",
      boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
      fontFamily: "Segoe UI, Roboto, sans-serif",
      margin: "20px",
      textAlign: "left",
      transition: "all 0.3s ease"
    }}>

      {/* Vasemman yläkulman väri-elementti */}
      <div style={{
        position: "absolute",
        top: "12px",
        left: "12px",
        width: "14px",
        height: "14px",
        borderRadius: "4px",
        backgroundColor: indicatorColor,
        boxShadow: `0 0 10px ${indicatorColor}`,
        border: "1px solid rgba(255,255,255,0.3)"
      }} title={`Signal: ${data.signal}`} />

      <h2 style={{ fontSize: "1.2rem", marginBottom: "10px", fontWeight: 600 }}>{data.pair}</h2>
      <p><strong>Signal:</strong> {data.signal}</p>
      <p><strong>Timeframe:</strong> {data.timeframe}</p>
      <p><strong>Price:</strong> {data.price}</p>
      <p style={{ fontSize: "0.8rem", opacity: 0.6 }}>{new Date(data.timestamp).toLocaleString()}</p>
    </div>
  );
};

export default SignalCard;
