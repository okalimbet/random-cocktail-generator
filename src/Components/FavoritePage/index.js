import React, { useState, useEffect } from "react";
import './FavoritePage.scss';
import { apiCalls } from "../../apiCalls";
import { Link } from 'react-router-dom';
import rightButton from "../../Assets/right-button.png";
import leftButton from "../../Assets/left-button.png";

const FavoritePage = ({ favoriteRecipes }) => {
  return (
    <section>
      <div className="nav-container">
        <Link to="/welcome" className="link-redirect">
          <img className="image-redirect" src={leftButton}/>
          <h3 className="title-redirect">Welcome Page</h3>
        </Link>
        <div className="titles-container">
          <h1 className="title-main">Recipe</h1>
        </div>
      </div>
      <section className="cards-container">

      </section>
    </section>
  )
}

export default FavoritePage;