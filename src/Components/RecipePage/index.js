import React, { useState, useEffect } from "react";
import './RecipePage.scss';
import { apiCalls } from "../../apiCalls";

const RecipePage = ({ randomRecipe }) => {
  const { 
    idDrink, 
    strCategory, 
    strDrink, 
    strDrinkThumb, 
    strGlass
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
    <p>this is 
      {idDrink}
    </p>
  )
  
}

export default RecipePage;