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

  const Liner = (block) => {
    if (typeof block === "object") {
      return block.map((line, index) => {
        return (
          <>
            <i key={index}>{line}</i>
            <br />
          </>
        );
      });
    }

    return (
      <>
        <i>{block}</i>
        <br />
      </>
    );
  };

  return (
    <div className="App">
      <blockquote>
        {Liner(quote.block)}
        {quote.type !== "motivation" && <cite>{quote.cite}</cite>}
      </blockquote>
    </div>
  );
}

export default App;
