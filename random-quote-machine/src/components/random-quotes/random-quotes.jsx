import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [quote, setQuote] = useState("");

  const getQuote = () => {
    fetch("https://api.themotivate365.com/stoic-quote")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setQuote(data);
      });
  };

  return (
    <div className="App">
      <button onClick={getQuote}>Get Quote</button>
      <div>{quote.text}</div>
    </div>
  );
}