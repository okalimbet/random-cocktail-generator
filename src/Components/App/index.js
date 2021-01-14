import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import './App.scss';
import { apiCalls } from "../../apiCalls";

const App = () => {
  const [cocktailRandom, setCocktailRandom] = useState(null);
  const [error, setError] = useState("");
  const [queriedPostings, setQueriedPostings] = useState([]);

  const getInfo = () => {
    Promise.resolve(apiCalls.getRandomCocktail())
      .then((data) => {
        console.log(data.drinks[0])
        setCocktailRandom(data.drinks[0])
      })
      .catch((err) => setError(err.message));
  };

  useEffect(() => getInfo(), {});

  return (
    <main className="App">
      <h1>Hello</h1>
    </main>
  );
}

export default App;
