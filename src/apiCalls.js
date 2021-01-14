const getData = (path) => {
  return fetch(path).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(
        "Sorry we are having difficulty loading this page, please try again later!"
      );
    }
  });
};

const urlBody = "https://www.thecocktaildb.com/api/json/v1/1/search.php?"
export const apiCalls = {

  getRandomCocktail: () => {
    return getData(`https://www.thecocktaildb.com/api/json/v1/1/random.php`);
  },

  getCocktailByName: (cocktailName) => {
    // return getData(`${urlBody}s=${cocktailName}`);
    return getData('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
  },

  getCocktailByIngredient: (ingredientName) => {
    // return getData(`${urlBody}-=${ingredientName}`);
    return getData(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=v`);
  }
}