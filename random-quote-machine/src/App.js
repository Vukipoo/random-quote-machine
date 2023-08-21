import "./App.scss";
import React, { useState, useEffect } from "react";
import useTypewriter from 'react-typewriter-hook';
import { useSpring, animated } from 'react-spring';




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



    const fadeIn = useSpring({
      from: { opacity: 0 },
      to: { opacity: 1 },
    });


    const MagicOcean = useTypewriter(quote.quote);

  

  return (
    <animated.div style={fadeIn} className="App"> 
      <img src='https://play-lh.googleusercontent.com/dNjXI5-kNNTlH6KZm9DrffEehlWM8BQ3Yph-PL3gyT_3mPjMrllU1P5268ngI6Vmjj8=s200'/>
      <div className="quotes-container">
      <button onClick={getQuote}>Get Quote</button>
      <div className="author">{quote.author}</div>
      <div className="quote">{MagicOcean}</div>
      </div>
    </animated.div>
  );
}



//todo 
// 1. style button make it a black background with thin whiteish border add some padding 
// 2. font family 
// 3. add animation to letters 
// 4. twitter button
// 5. get chat gpt for css for the letters (add animation for their appearance)