# Random Cocktail Generator - Turing Mod 3 Solo Project

### [Random Cocktail Generator Link](https://random-cocktail-generator.herokuapp.com/)

### [Link To My Repo](https://github.com/scripka/random-coctail-generator)

### [Original Project Spec](https://frontend.turing.io/projects/module-3/binary-challenge.html)

---

<img width="1353" alt="Screen Shot 2021-01-18 at 1 41 02 PM" src="https://user-images.githubusercontent.com/66269306/104961150-f8406880-5992-11eb-8098-d937b47b59b1.png">

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies and Tools](#technologies-and-tools)
- [Challenges](#challenges)
- [Wins](#wins)
- [ScreenShots and Demos](#screenshots-and-demos)
- [Roadmap](#roadmap)
- [Credits](#credits)

## Project Overview

---

Random Cocktail Generator is a website when you can go to get some inspiration for a drink after a long day in the office.
A smooth UI shows you a simple way to travel through the pages, find the best drinks, and add them to your favorites.

Celebrate your end of the day with a great cocktail!

This project was aimed to test our knowledge of the concepts in MOD 3.

## Features

---

- **Unique Cocktails** - The site gets a random cocktail from the information pulled from the API

- **Detailed Cocktail Information** - Each cocktail contains full detailed information about how to prepare the drink and what ingredients are needed to make it

- **Fast and Responsive** - Using React, the site provides a quick and responsive user experience.

- **Navigation** - Router allows the user to navigate the site using common sense URLs

- **Contains Robust Testing** - All functionality is complemented by a robust testing suite, enabling easy expansion of the codebase.

## Technologies And Tools

---

- JavaScript (ES6)
- HTML
- CSS/Scss/Sass
- React
- React Hooks
- Router
- JSX
- Jest
- Vercel(deployment)

## Challenges

---

- Integrating async testing
- Working with states of React components

## Wins

---

Creating a responsive website with multiple features.

## ScreenShots and Demos

---

### Welcome Page

---

<img width="980" alt="Screen Shot 2021-01-18 at 1 41 02 PM" src="https://user-images.githubusercontent.com/66269306/104963934-bf0af700-5998-11eb-8421-b9a2afee46e4.png">

<details>
  <summary>**Under the Hood**</summary>

![welcomepage](https://media.giphy.com/media/JGl8hPNMOaj8koHxHC/giphy.gif)

Welcome Page:

Welcome Page invites users to a minimalistic looking page where they can interact with the button SHAKE that sends users to a random recipe page.

</details>

---

### Recipe Page

---

<img width="980" alt="Screen Shot 2021-01-18 at 2 19 39 PM" src="https://user-images.githubusercontent.com/66269306/104964028-e95cb480-5998-11eb-9c6d-be049fac4e7c.png">

<details>
  <summary>**Under the Hood**</summary>

![recipepage](https://media.giphy.com/media/kCgJ2SnYSdHr9uexgZ/giphy.gif)

Recipe Page:

Here where the users can see the detailed information about the random cocktail, which includes:

- Cocktail image
- Ingredients
- Measurements
- Name
- Category
- Type of glass

Interactive elements:

- favorite button
- Go to the Favorites link
- Next Drink! button

Upon clicking on the favorite button, users are adding a drink to their favorites that can be displayed on the Favorites page.
Go to Favorites link sends users to Favorites drinks page
Next Drink! the button generates a new random recipe

![recipepage-to-favorites](https://media.giphy.com/media/6xvyF90zUZJEPx4GBM/giphy.gif)

All buttons and links have a hover effect that helps users to determine where they are and which button they are about to click

</details>

---

### Favorites Page

---

<img width="980" alt="Screen Shot 2021-01-18 at 2 19 53 PM" src="https://user-images.githubusercontent.com/66269306/104964121-0d1ffa80-5999-11eb-8cf3-9ec643bfdc77.png">

<details>
  <summary>**Under the Hood**</summary>

![favorites](https://media.giphy.com/media/Ql5dqr1YyftwZvWFL7/giphy.gif)

Favorites Page:

The favorites page displays all favorites drinks users picked by going through random recipes.
Each drink card contains simplified information:

- image
- name
- instructions

Interactive elements:

- Go to Welcome Page
- Go to Recipe Page

When users are finished with this page they can choose to come back to the Welcome page or come back to the Recipe page by clicking on the links above.

</details>

---

## Roadmap

---

Future additions to include:

- Change component structure to allow users to click on their chosen drink and look up more details about the drink
- Add feature to search for drinks by name and ingredients
- Add a feature where users can fill out a small quiz to find drinks

## Credits

<img src="https://avatars0.githubusercontent.com/u/66269306?s=400&u=b59f8ccc1002269319d952aa028ee270629b2ead&v=4" alt="Olga Morgan"
 width="150" height="auto" />

**Olga Morgan**
[GitHub Profile](https://github.com/scripka)
