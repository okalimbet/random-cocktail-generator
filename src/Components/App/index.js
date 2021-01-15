import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import './App.scss';
import { apiCalls } from "../../apiCalls";

const App = () => {
  const [cocktailRandom, setCocktailRandom] = useState(null);
  const [error, setError] = useState("");
  const [queriedCocktails, setqueriedCocktails] = useState([]);

  const getInfo = () => {
    Promise.resolve(apiCalls.getRandomCocktail())
      .then((data) => {
        console.log(data.drinks[0])
        setCocktailRandom(data.drinks[0])
      })
      .catch((err) => setError(err.message));
  };

  const searchCocktailByName = (cocktailName) => {
    // const cocktailKeyword = cocktailName.toLowerCase();
    Promise.resolve(apiCalls.getCocktailByName())
      .then((data) => {
        if(data.drinks) {
          console.log(data.drinks)
        setqueriedCocktails(data.drinks);
        } else {
          console.log("sorry no such cocktail")
        }
      })
      .catch((err) => setError(err.message));
  };

  const searchCocktailByIngredient = (cocktailIngredient) => {
    // const cocktailKeyword = cocktailIngredient.toLowerCase();
    Promise.resolve(apiCalls.getCocktailByIngredient())
      .then((data) => {
        if(data.drinks) {
          console.log(data)
        setqueriedCocktails(data.drinks);
        } else {
          console.log("sorry no such ingredients in our recipes")
        }
      })
      .catch((err) => setError(err.message));
  }

  useEffect(() => getInfo(), {});
  // useEffect(() => searchCocktailByIngredient(), []);

  return (
    <main className="App">
      <h1>Hello</h1>
    </main>
  );
}

export default App;
