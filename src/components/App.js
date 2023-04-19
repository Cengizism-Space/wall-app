import { useState, useEffect } from "react";
import "./App.css";
import quotesData from "./quotes.json";
import Quoter from "./Quoter";

function App() {
  const [count, setCount] = useState(0);
  const [quote, setQuote] = useState(quotesData[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => (count < quotesData.length - 1 ? count + 1 : 0));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setQuote(quotesData[count]);
  }, [count]);

  return (
    <div className="App">
      <Quoter quote={quote} />
    </div>
  );
}

export default App;
