import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { useState, useEffect, useCallback } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [quotes, setQuotes] = useState([]);

  const fetchQuotes = useCallback(async () => {
    setLoading(true);
    await getDocs(collection(db, "quotes")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setLoading(false);
      setQuotes(newData);
      console.log(quotes, newData);
    });
  }, [quotes]);

  useEffect(() => {
    fetchQuotes();
  }, [fetchQuotes]);

  return (
    <div className="App">
      <header>
        <h2>{loading ? 'Retrieving quotes..' : 'Quotes'}</h2>
      </header>
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
