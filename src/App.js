import { useState } from "react";
import "./App.css";
import quotesData from "./quotes.json";

function App() {
  const [quotes] = useState(quotesData);

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
