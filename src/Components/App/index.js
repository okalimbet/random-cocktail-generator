import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import './App.scss';
import { apiCalls } from "../../apiCalls";
import RecipePage from "../RecipePage";
import FavoritePage from "../FavoritePage";

const App = () => {
  const [cocktailRandom, setCocktailRandom] = useState(null);
  const [error, setError] = useState("");
  const [queriedCocktails, setQueriedCocktails] = useState([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

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
    Promise.resolve(apiCalls.getCocktailByIngredient())
      .then((data) => {
        if(data.drinks) {
        setQueriedCocktails(data.drinks);
        } else {
          console.log("sorry no such ingredients in our recipes")
        }
      })
      .catch((err) => setError(err.message));
  }

  const addFavoriteRecipes = (id) => {
      const isDuplicate = favoriteRecipes.find(recipe => {
      return recipe.idDrink === id
    })
    if(!isDuplicate) {
      setFavoriteRecipes([...favoriteRecipes, cocktailRandom])
    }
  }

  useEffect(() => getInfo(), []);
  
  return (
    <main className="App">
      {cocktailRandom && 
        <Route
          exact path="/recipe" 
          render={() => (
            <RecipePage
              randomRecipe={cocktailRandom}
              addFavoriteRecipes={addFavoriteRecipes}
              getInfo={getInfo}
            /> 
          )}
        />
      }
      {cocktailRandom && 
        <Route
          exact path="/favorites" 
          render={() => (
            <FavoritePage
              randomRecipe={favoriteRecipes}
            /> 
          )}
        />
      }
    </main>
  )
}

export default App;
