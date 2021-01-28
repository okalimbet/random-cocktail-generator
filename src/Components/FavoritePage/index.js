import React from "react";
import './FavoritePage.scss';
import { Link } from 'react-router-dom';
import leftButton from "../../Assets/left-button.png";
import rightButton from "../../Assets/right-button.png";
import defaultImage from "../../Assets/default-image.jpg";
import PropTypes from 'prop-types';

const FavoritePage = ({ favoriteRecipes }) => {
    
  if(!favoriteRecipes.length) {
    return (
    <section data-testid="favorite-drinks-element">
      <section className="favorite-nav-container">
       <div className="nav-wrapper">
          <Link to="/" className="favorite-link-redirect" data-testid="welcome-page-link">
            <img className="favorite-image-redirect" src={leftButton} alt="welcome-page-icon"/>
            <h3 className="title-redirect">Go to Welcome Page</h3>
          </Link>
          <div className="favorite-titles-container">
            <h1 className="favorite-title-main">Favorite Recipes</h1>
          </div>
          <Link to="/recipe" className="link-redirect" data-testid="redirect-recipe-link">
            <h3 className="title-redirect">Go to Random Recipe</h3>
            <img className="image-redirect" src={rightButton} alt="right-redirect-icon"/>
          </Link>
        </div>
      </section>
      <div className="message-container">
        <h2 className="no-fav-message">You don't have any favorite drinks yet!</h2>
      </div>
    </section>
    )
  }
  return (
    <section data-testid="favorite-drinks-element" className="favorite-view-container">
      <section className="favorite-nav-container">
       <div className="nav-wrapper">
          <Link to="/" className="favorite-link-redirect" data-testid="welcome-page-link">
            <img className="favorite-image-redirect" src={leftButton} alt="welcome-page-icon"/>
            <h3 className="title-redirect">Go to Welcome Page</h3>
          </Link>
          <div className="favorite-titles-container">
            <h1 className="favorite-title-main">Favorite Recipes</h1>
          </div>
          <Link to="/recipe" className="link-redirect" data-testid="redirect-recipe-link">
            <h3 className="title-redirect">Go to Random Recipe</h3>
            <img className="image-redirect" src={rightButton} alt="right-redirect-icon"/>
          </Link>
        </div>
      </section>
      <section className="cards-container">
        {
          favoriteRecipes.map(cocktail => {
            return (
              <Link className="recipe-card-wrapper" to={`/recipe/${cocktail.idDrink}`} key={`${cocktail.idDrink}`}>
              <article className="recipe-card-container">
                <div className="card-wrapper">
                  <img className="card-picture" src={cocktail.strDrinkThumb ? cocktail.strDrinkThumb : defaultImage} alt={ cocktail.strDrinkThumb ? `cocktail-${cocktail.strDrink}` : "default-image"}/>
                  <p>{cocktail.strDrink ? cocktail.strDrink : "unknown"}</p>
                </div>
                <div className="instructions-container">
                  <p className="recipe-card-instructions">{cocktail.strInstructions ? cocktail.strInstructions : "No Instructions Provided"}</p>
                </div>
              </article>
              </Link>
            )
          })
        }
      </section>
    </section>
  )
}

FavoritePage.propTypes = {
  favoriteRecipes: PropTypes.array
}

export default FavoritePage;