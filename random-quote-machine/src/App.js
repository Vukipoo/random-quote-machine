import "./App.scss";
import React, { useState, useEffect } from "react";


export default function App() {
  const [quote, setQuote] = useState("");

  const getQuote = () => {
    fetch("https://api.themotivate365.com/stoic-quote")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setQuote(data);
      });
    }


    useEffect(() => {
      getQuote();

    }, []);


  
  

  return (
    <div className="App">
      <img src='https://play-lh.googleusercontent.com/dNjXI5-kNNTlH6KZm9DrffEehlWM8BQ3Yph-PL3gyT_3mPjMrllU1P5268ngI6Vmjj8=s200'/>
      <div className="quotes-container">
      <button onClick={getQuote}>Get Quote</button>
      <div className="author">{quote.author}</div>
      <div className="quote">{quote.quote}</div>
      </div>
    </div>
  );
}