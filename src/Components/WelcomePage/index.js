import React from "react";
import { Link } from "react-router-dom";
import './WelcomePage.scss';
const WelcomePage = () => {

    return (
      <section className="welcome-page-element" data-testid="welcome-page-element">
        <h1 className="welcome-page-title">Had a tough day in the office? Shake it up with a drink, you deserve this!</h1>
        <Link to={`/recipe`} data-testid="redirect-link-recipe" className="welcome-page-link">
          <button className="welcome-page-button">SHAKE</button>
        </Link>
      </section>
    )
}

export default WelcomePage;