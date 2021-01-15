import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import './App.scss';
import { apiCalls } from "../../apiCalls";
import RecipePage from "../RecipePage";

const App = () => {
  const [cocktailRandom, setCocktailRandom] = useState(null);
  const [error, setError] = useState("");
  const [queriedCocktails, setQueriedCocktails] = useState([]);

  const getInfo = () => {
    Promise.resolve(apiCalls.getRandomCocktail())
      .then((data) => {
        console.log(data.drinks[0])
        setCocktailRandom(data.drinks[0])
        // sortingRecipeByItems(cocktailRandom)
      })
      .catch((err) => setError(err.message));
  };

  const searchCocktailByName = (cocktailName) => {
    // const cocktailKeyword = cocktailName.toLowerCase();
    Promise.resolve(apiCalls.getCocktailByName())
      .then((data) => {
        if(data.drinks) {
          
        setQueriedCocktails(data.drinks);
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
          // console.log(data)
        setQueriedCocktails(data.drinks);
        } else {
          console.log("sorry no such ingredients in our recipes")
        }
      })
      .catch((err) => setError(err.message));
  }

  useEffect(() => getInfo(), {});
  // useEffect(() => {sortingRecipeByItems(cocktailRandom), []);
  
  return (
    <main className="App">
      {cocktailRandom && <Route
        exact path="/recipe/" 
        render={()=>(
        <RecipePage
          randomRecipe = {cocktailRandom}/>)}/> 
        }
    </main>
  );
}

export default App;
