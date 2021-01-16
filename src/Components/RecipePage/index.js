import React, { useState, useEffect } from "react";
import './RecipePage.scss';
import { apiCalls } from "../../apiCalls";
import { Link } from 'react-router-dom'
import rightButton from "../../Assets/right-button.png";
import favButton from "../../Assets/favorite-button.png";


const RecipePage = ({ randomRecipe, addFavoriteRecipes, getInfo }) => {
  const { 
    idDrink, 
    strCategory, 
    strDrink, 
    strDrinkThumb, 
    strGlass,
    strInstructions
  } = randomRecipe;
  
  const [ingredientsAll, setIngredientsAll] = useState([]);
  const [measuresAll, setMeasuresAll] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const ingredientItem = 'strIngredient';
  const measureItem = 'strMeasure'
  
  const sortingRecipeByItems = (cocktail, itemName) => {
    const cocktailData = Object.entries(cocktail)
    const items = cocktailData
      .reduce((items, item) => {
        if(item[0].includes(itemName)) {
          items.push(item[1])
        }
        return items;
        },[])
      .filter(item => item !== null);
    return items;
  }

  const handleClick = () => {
    setIsFavorite(true);
    addFavoriteRecipes(idDrink);
  }

  const getAllIngredientsMeasures = () => {
    const ingredients = sortingRecipeByItems(randomRecipe, ingredientItem);
    const measures = sortingRecipeByItems(randomRecipe, measureItem);
    setIngredientsAll(ingredients);
    setMeasuresAll(measures)
  }

  useEffect(() => getAllIngredientsMeasures(), randomRecipe);

  return (
    <section key={idDrink} className="recipe-view" data-testid={`recipe-view-${idDrink}`}> 
      <div className="nav-container">
        <div className="titles-container">
          <h1 className="title-main">Recipe</h1>
          <h2 className="title-drink-name">{strDrink}</h2>
          <button onClick={getInfo} className="button-generate">Not a Vibe!</button>
        </div>
        <Link to="/favorites" className="link-redirect">
          <h3 className="title-redirect">Go to my favorites</h3>
          <img className="image-redirect" src={rightButton}/>
        </Link>
      </div>
      <section className="sides-container">
        <section className="left-side">
          <img className="image-drink" src={strDrinkThumb}/>
          <h3 className="title-secondary">Ingredients</h3>
          <ul className="list-ingredients">
            {
              ingredientsAll.map((ingredient, index) => {
                if(ingredient && measuresAll[index]) {
                  return (
                    <li className="ingredient">{ingredient.toLowerCase()} - {measuresAll[index].toLowerCase()}</li>
                  )
                } else {
                  <li className="ingredient">{ingredient.toLowerCase()}</li>
                }
              })
            }
          </ul>
        </section>
        <section className="right-side">
            <h3 className="title-secondary">Instructions</h3>
            <div className="recipe-details-container">
              <p className="recipe-detail">{strCategory}</p>
              <p className="recipe-detail">{strGlass}</p>
              <p className="recipe-detail">{strInstructions}</p>
            </div>
            <button 
              onClick={handleClick} className="button-favorite-wrapper"
              disabled={isFavorite ? true : false}
              >
              <img className="button-favorite" src={favButton}/>
            </button>
        </section>
      </section>
    </section>
  )
  
}

export default RecipePage;