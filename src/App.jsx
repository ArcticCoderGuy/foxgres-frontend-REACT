import React, { useEffect, useState } from "react";
import SignalCard from "./components/SignalCard";
import "./index.css";

function App() {
  const [signals, setSignals] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newSignal = {
        pair: "EUR/USD",
        timeframe: "M5",
        signal: ["BUY", "SELL", "BOS"][Math.floor(Math.random() * 3)], // nyt satunnaisesti myös BOS
        timestamp: new Date().toISOString(),
        price: (1.08 + Math.random() * 0.01).toFixed(5)
      };

      setSignals(prev => [newSignal, ...prev].slice(0, 10));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-background">
      <div className="signal-grid">
        {signals.map((sig, index) => (
          <SignalCard key={index} data={sig} />
        ))}
      </div>
    </div>
  );
}

export default App;
