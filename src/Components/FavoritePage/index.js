import React from "react";
import './FavoritePage.scss';
import { Link } from 'react-router-dom';
import rightButton from "../../Assets/right-button.png";
import leftButton from "../../Assets/left-button.png";
import defaultImage from "../../Assets/default-image.jpg"

const FavoritePage = ({ favoriteRecipes }) => {
    
  if(!favoriteRecipes.length) {
    return (
    <section data-testid="favorite-drinks-element">
      <div className="nav-container">
        <Link to="/" className="link-redirect" data-testid="welcome-page-link">
          <img className="image-redirect" src={leftButton} alt="welcome-page-icon"/>
          <h3 className="title-redirect">Welcome Page</h3>
        </Link>
        <div className="titles-container">
          <h1 className="title-main">Favorite Recipes</h1>
        </div>
      </div>
      <h2>You don't have any favorite drinks yet!</h2>
    </section>
    )
  }
  return (
    <section data-testid="favorite-drinks-element">
      <div className="nav-container">
        <Link to="/" className="link-redirect" data-testid="welcome-page-link">
          <img className="image-redirect" src={leftButton} alt="welcome-page-icon"/>
          <h3 className="title-redirect">Welcome Page</h3>
        </Link>
        <div className="titles-container">
          <h1 className="title-main">Favorite Recipes</h1>
        </div>
      </div>
      <section className="cards-container">
        {
          favoriteRecipes.map(cocktail => {
            return (
              <article key={`fav-drink-${cocktail.idDrink}`}>
                <div className="card-wrapper">
                  <img className="card-picture" src={cocktail.strDrinkThumb ? cocktail.strDrinkThumb : defaultImage} alt={ cocktail.strDrinkThumb ? `cocktail-${cocktail.strDrink}` : "default-image"}/>
                  <p>{cocktail.strDrink ? cocktail.strDrink : "unknown"}</p>
                </div>
                <div>
                  <p>{cocktail.strInstructions ? cocktail.strInstructions : "No Instructions Provided"}</p>
                </div>
              </article>
            )
          })
        }
      </section>
    </section>
  )
}

export default FavoritePage;