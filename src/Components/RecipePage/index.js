import React, { useState, useEffect } from "react";
import './RecipePage.scss';
import { apiCalls } from "../../apiCalls";
import { Link } from 'react-router-dom'
import rightButton from "../../Assets/right-button.png";
import favButton from "../../Assets/favorite-button.png";


const RecipePage = ({ randomRecipe }) => {
  const { 
    idDrink, 
    strCategory, 
    strDrink, 
    strDrinkThumb, 
    strGlass,
    strInstructions
  } = randomRecipe;

  const [ingredientsAll, setIngredientsAll] = useState([])
  const [measuresAll, setMeasuresAll] = useState([])
  console.log(randomRecipe)
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
  
    console.log(items)
    return items;
  }

  const getAllIngredientsMeasures = () => {
    const ingredients = sortingRecipeByItems(randomRecipe, ingredientItem);
    const measures = sortingRecipeByItems(randomRecipe, measureItem);
    setIngredientsAll(ingredients);
    setMeasuresAll(measures)
  }

  useEffect(() => getAllIngredientsMeasures(), []);

  return (
    <section key={idDrink} className="recipe-view" data-testid={`recipe-view-${idDrink}`}> 
      <nav>
        <div className="titles-container">
          <h1 className="title-main">Recipe</h1>
          <h2 className="title-drink-name">{strDrink}</h2>
        </div>
        <Link to="/favorites" className="link-redirect">
          <h3 className="title-redirect">Go to my favorites</h3>
          <img className="image-redirect" src={rightButton}/>
        </Link>
      </nav>
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
            <button onClick="" className="button-favorite-wrapper">
              <img className="button-favorite" src={favButton}/>
            </button>
        </section>
      </section>
    </section>
  )
  
}

export default RecipePage;