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

export const apiCalls = {

  getRandomCocktail: () => {
    return getData(`https://www.thecocktaildb.com/api/json/v1/1/random.php`);
  }
}