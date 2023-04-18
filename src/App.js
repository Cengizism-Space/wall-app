import { useState, useEffect } from "react";
import "./App.css";
import quotesData from "./quotes.json";

function App() {
  const [count, setCount] = useState(0);
  const [quote, setQuote] = useState(quotesData[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => (count < quotesData.length - 1 ? count + 1 : 0));
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setQuote(quotesData[count]);
  }, [count]);

  return (
    <div className="App">
      <blockquote>
        <i>{quote.block}</i>
        <br />
        <cite>{quote.cite}</cite>
      </blockquote>
    </div>
  );
}

export default App;
