import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import './App.scss';
import { apiCalls } from "../../apiCalls";
import RecipePage from "../RecipePage";
import FavoritePage from "../FavoritePage";
import WelcomePage from "../WelcomePage";
import LoadingPage from "../LoadingPage";
import ErrorPage from "../ErrorPage";

const App = () => {
  const [cocktailRandom, setCocktailRandom] = useState(null);
  const [error, setError] = useState("");
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  const getInfo = () => {
    Promise.resolve(apiCalls.getRandomCocktail())
      .then((data) => {
        setCocktailRandom(data.drinks[0])
      })
      .catch((err) => setError(err.message));
  };

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
      <Switch>
        {error && 
          <Route 
            component={ErrorPage}
          />
        }

        {!cocktailRandom &&
          <Route 
            exact path="/recipe" 
            component={LoadingPage}
          />
        }

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

        {favoriteRecipes && 
          <Route
            exact path="/favorites" 
            render={() => (
              <FavoritePage
                favoriteRecipes={favoriteRecipes}
              /> 
            )}
          />
        }
        <Route 
          exact path="/" 
          component={WelcomePage} 
        />
        <Route component={ErrorPage} />
      </Switch>
    </main>
  )
}

export default App;
