import { useState, useEffect, useCallback } from "react";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([]);

  const fetchQuotes = useCallback(async () => {
    setQuotes([
      {
        block: "Simplicity is the ultimate sophistication.",
        cite: "Leonardo da Vinci",
      },
      {
        block: "Gravitation is not the reason for falling in love.",
        cite: "Albert Einstein",
      },
    ]);
  }, []);

  useEffect(() => {
    fetchQuotes();
  }, [fetchQuotes]);

  return (
    <div className="App">
      <ul>
        {quotes.map((quote, index) => {
          return (
            <li key={index}>
              <blockquote>
                <i>{quote.block}</i>
                <br />
                <cite>{quote.cite}</cite>
              </blockquote>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
