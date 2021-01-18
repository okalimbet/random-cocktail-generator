import React, { useState, useEffect } from "react";
import './RecipePage.scss';
import { Link } from 'react-router-dom'
import rightButton from "../../Assets/right-button.png";
import favButton from "../../Assets/favorite-button.png";
import defaultImage from "../../Assets/default-image.jpg"

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
    addFavoriteRecipes(idDrink);
  }

  const getAllIngredientsMeasures = (e) => {
    const ingredients = sortingRecipeByItems(randomRecipe, ingredientItem);
    const measures = sortingRecipeByItems(randomRecipe, measureItem);
    setIngredientsAll(ingredients);
    setMeasuresAll(measures)
  }

  useEffect(() => getAllIngredientsMeasures(), [randomRecipe]);

  return (
    <section key={idDrink} className="recipe-view" data-testid={`recipe-view`}> 
      <div className="nav-container">
        <span className="circle-red-shape"></span>
        <div className="titles-container">
          <h1 className="title-main">Recipe</h1>
          <h2 className="title-drink-name">{strDrink ? strDrink : "Name is unknown"}</h2>
          <button onClick={getInfo} className="button-generate">Not a Vibe!</button>
        </div>
        <Link to="/favorites" className="link-redirect" data-testid="redirect-favorite-link">
          <h3 className="title-redirect">Go to my favorites</h3>
          <img className="image-redirect" src={rightButton} alt="right-redirect-icon"/>
        </Link>
      </div>
      <section className="sides-container">
        <section className="left-side">
          <img className="image-drink" src={strDrinkThumb ? strDrinkThumb : defaultImage} alt={strDrinkThumb ? `recipe-${strDrink}` : "default-image"}/>
          <h3 className="title-secondary-ingredients">Ingredients</h3>
          <ul className="list-ingredients">
            {
              ingredientsAll.length ? ingredientsAll.map((ingredient, index) => {
                if(ingredient && measuresAll[index]) {
                  return (
                    <li key={`${idDrink}-${ingredient}`}className="ingredient">{ingredient.toLowerCase()} - {measuresAll[index].toLowerCase()}</li>
                  )
                } else {
                  <li key={`${idDrink}-${ingredient}`} className="ingredient">{ingredient.toLowerCase()}</li>
                }
              }) : (<li key="unknown" className="ingredient">Ingredients are unknown</li>)
            }
          </ul>
        </section>
        <section className="right-side">
            <h3 className="title-secondary">Instructions</h3>
            <div className="recipe-details-container">
              <p className="recipe-detail">Category: {strCategory ? strCategory : "unknown"}</p>
              <p className="recipe-detail">Type of glass: {strGlass ? strGlass : "any glass!"}</p>
              <p className="recipe-detail">{strInstructions ? strInstructions : "no instructions included"}</p>
            </div>
            {/* <span className="circle-purple-shape"></span> */}
            <div className="favorite-btn-container">
            <button onClick={handleClick} className="button-favorite-wrapper">
              <img className="button-favorite" src={favButton} alt="favorite-button"/>
            </button>
            </div>
        </section>
      </section>
    </section>
  )
  
}

export default RecipePage;