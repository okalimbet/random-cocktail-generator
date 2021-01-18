import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import mockData from '../../TestData/_mockData';
import '@testing-library/jest-dom';
import { MemoryRouter, Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history'
import RecipePage from './index.js';

describe("RecipePage", () => {
  
  it("should render all elements of the recipe correctly", () => {
    render(<RecipePage 
      randomRecipe={mockData.drinks[0]}
      addFavoriteRecipes={jest.fn()}
      getInfo={jest.fn()}
      />, { wrapper: MemoryRouter });

    expect(screen.getByText("Recipe")).toBeInTheDocument();
    expect(screen.getByText("Caipirinha")).toBeInTheDocument();
    expect(screen.getByText("Next Drink!")).toBeInTheDocument();
    expect(screen.getByText("Go to my favorites")).toBeInTheDocument();
    expect(screen.getByAltText("right-redirect-icon")).toBeInTheDocument();
    expect(screen.getByAltText("recipe-Caipirinha")).toBeInTheDocument();
    expect(screen.getByText("Ingredients")).toBeInTheDocument();
    expect(screen.getByText("sugar - 2 tsp")).toBeInTheDocument();
    expect(screen.getByText("lime - 1")).toBeInTheDocument();
    expect(screen.getByText("cachaca - 2 1/2 oz")).toBeInTheDocument();
    expect(screen.getByText("Instructions")).toBeInTheDocument();
    expect(screen.getByText("Category: Ordinary Drink")).toBeInTheDocument();
    expect(screen.getByText("Type of glass: Old-fashioned glass")).toBeInTheDocument();
    expect(screen.getByText("Mix everything together")).toBeInTheDocument();
    expect(screen.getByAltText("favorite-button")).toBeInTheDocument();
  })

  it("it should display default values when information is not available", () => {
    render(<RecipePage 
      randomRecipe={mockData.drinks[1]}
      addFavoriteRecipes={jest.fn()}
      getInfo={jest.fn()}
      />, { wrapper: MemoryRouter });

      expect(screen.getByText("Name is unknown")).toBeInTheDocument();
      expect(screen.getByAltText("default-image")).toBeInTheDocument();
      expect(screen.getByText("Ingredients are unknown")).toBeInTheDocument();
      expect(screen.getByText("Category: unknown")).toBeInTheDocument();
      expect(screen.getByText("Type of glass: any glass!")).toBeInTheDocument();
      expect(screen.getByText("no instructions included")).toBeInTheDocument();
    })

  it("it should redirect user to a favorite drinks page by clicking on Go to my favorites button", async () => {
    const history = createMemoryHistory();
    render(<Router history={history}><RecipePage randomRecipe={mockData.drinks[0]}/></Router>);
    
    const favoritePageBtn = screen.getByTestId("redirect-favorite-link");
    userEvent.click(favoritePageBtn);

    await waitFor(() => expect(history.location.pathname).toBe("/favorites"));
  })

  it("User should be able click on Not a Vibe button to generate a new recipe", () => {
    const mockedGenerateBtn = jest.fn();

    render(<RecipePage 
      randomRecipe={mockData.drinks[0]}
      addFavoriteRecipes={jest.fn()}
      getInfo={mockedGenerateBtn}
      />, { wrapper: MemoryRouter });

    const generateRecipeBtn = screen.getByText("Next Drink!");
    userEvent.click(generateRecipeBtn);

    expect(mockedGenerateBtn).toBeCalledTimes(1);
  })

  it("User should be able click on Favorite Button to save a drink", () => {
    const mockFavoriteBtn = jest.fn();

    render(<RecipePage 
      randomRecipe={mockData.drinks[0]}
      addFavoriteRecipes={mockFavoriteBtn}
      getInfo={jest.fn()}
      />, { wrapper: MemoryRouter });

    const saveToFavorites = screen.getByAltText("favorite-button");
    userEvent.click(saveToFavorites);

    expect(mockFavoriteBtn).toBeCalledTimes(1);
  })
})