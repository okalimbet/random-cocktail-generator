import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './WelcomePage.scss';
const WelcomePage = () => {
    return (
      <section>
        <Link to={`/recipe`}>
          <button>Generate</button>
        </Link>
      </section>
    )
}

export default WelcomePage;