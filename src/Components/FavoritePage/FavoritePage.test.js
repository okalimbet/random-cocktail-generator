import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import mockData from '../../TestData/_mockData';
import '@testing-library/jest-dom';
import { MemoryRouter, Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history'
import FavoritePage from './index.js';

describe("FavoritePage", () => {

  it("it should render correctly", () => {
    render(<FavoritePage favoriteRecipes={mockData.favorites}/>, { wrapper: MemoryRouter });
    
    expect(screen.getByText("Caipirinha")).toBeInTheDocument();
    expect(screen.getByAltText("cocktail-Caipirinha")).toBeInTheDocument();
    expect(screen.getByText("Amaretto Sweet & Sour")).toBeInTheDocument();
    expect(screen.getByAltText("cocktail-Amaretto Sweet & Sour")).toBeInTheDocument();

    expect(screen.getByText("Favorite Recipes")).toBeInTheDocument();

    expect(screen.getByText("Welcome Page")).toBeInTheDocument();
    expect(screen.getByAltText("welcome-page-icon")).toBeInTheDocument();
  })

  it("if drink name, image, or instructions are missing, display default values", () => {
    render(<FavoritePage favoriteRecipes={mockData.favorites}/>, { wrapper: MemoryRouter });

    expect(screen.getByText("unknown")).toBeInTheDocument();
    expect(screen.getByAltText("default-image")).toBeInTheDocument();
    expect(screen.getByText("No Instructions Provided")).toBeInTheDocument();
  })

  it("it should redirect user to a welcome page by clicking on welcome page button", async () => {
    const history = createMemoryHistory();
    render(<Router history={history}><FavoritePage favoriteRecipes={mockData.favorites}/></Router>);
    
    const welcomePageBtn = screen.getByTestId("welcome-page-link");
    userEvent.click(welcomePageBtn);

    await waitFor(() => expect(history.location.pathname).toBe("/"));
  })
})