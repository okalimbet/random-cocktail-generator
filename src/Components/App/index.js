import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import './App.scss';
import { apiCalls } from "../../apiCalls";
import RecipePage from "../RecipePage";

const App = () => {
  const [cocktailRandom, setCocktailRandom] = useState(null);
  const [error, setError] = useState("");
  const [queriedCocktails, setqueriedCocktails] = useState([]);

  const getInfo = () => {
    Promise.resolve(apiCalls.getRandomCocktail())
      .then((data) => {
        console.log(data.drinks[0])
        setCocktailRandom(data.drinks[0])
        // sortingRecipeByItems(cocktailRandom)
      })
      .catch((err) => setError(err.message));
      if(cocktailRandom) {
      sortingRecipeByItems(cocktailRandom)
      }
  };

  const sortingRecipeByItems = (cocktail) => {
    const cocktailData = Object.entries(cocktail)
    const ingedients = cocktailData.reduce((ingredients, item) => {

    })
    console.log(cocktailData)
  }
  const searchCocktailByName = (cocktailName) => {
    // const cocktailKeyword = cocktailName.toLowerCase();
    Promise.resolve(apiCalls.getCocktailByName())
      .then((data) => {
        if(data.drinks) {
          
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
          // console.log(data)
        setqueriedCocktails(data.drinks);
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
