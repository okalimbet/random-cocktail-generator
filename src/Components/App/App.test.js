import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import mockData from '../../TestData/_mockData';
import '@testing-library/jest-dom';
import { MemoryRouter, Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history'
import { apiCalls } from "../../apiCalls.js";
import App from './index.js';
jest.mock("../../apiCalls");

describe("App", () => {
  beforeEach(() => {
    apiCalls.getRandomCocktail.mockResolvedValue(mockData);
  });

  it("Should display welcome page on load", async() => {
    render(<App />, { wrapper: MemoryRouter });

    await waitFor(() => expect(screen.getByTestId("welcome-page-element")).toBeInTheDocument());
  })

  it("When user clicks on SHAKE button a recipePage is displayed", async() => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <App />
      </Router>
    );

    await waitFor(() => expect(screen.getByTestId("welcome-page-element")).toBeInTheDocument());

    const shakeBtn = await waitFor(() => screen.getByTestId("redirect-link-recipe"));
    userEvent.click(shakeBtn);

    await waitFor(() =>
      expect(history.location.pathname).toBe("/recipe"),
    );

    await waitFor(() =>
      expect(apiCalls.getRandomCocktail).toHaveBeenCalledTimes(1)
    );

    await waitFor(() =>
      expect(screen.getByTestId("recipe-view")).toBeInTheDocument()
    );
  })

  it("When user goes to the recipe page and clicks on Go to favorites button, it redirect to FavoritePage", async() => {
    render(
      <MemoryRouter initialEntries={["/recipe"]}>
        <App />
      </MemoryRouter>
    );

    await waitFor(() => expect(screen.getByTestId("recipe-view")).toBeInTheDocument());

    const favoritePageBtn = await waitFor(() => screen.getByTestId("redirect-favorite-link"));
  
    userEvent.click(favoritePageBtn);

    await waitFor(() =>
      expect(screen.getByTestId("favorite-drinks-element")).toBeInTheDocument()
    );
  })

  it("When user on the recipe page they can click on favorite btn to save drinks to their favorites", async() => {
    render(
      <MemoryRouter initialEntries={["/recipe"]}>
        <App />
      </MemoryRouter>
    );

    await waitFor(() => expect(screen.getByTestId("recipe-view")).toBeInTheDocument());

    const favoriteBtn = await waitFor(() => screen.getByAltText("favorite-button"));
  
    userEvent.click(favoriteBtn);
    
    const favoritePageBtn = await waitFor(() => screen.getByTestId("redirect-favorite-link"));
  
    userEvent.click(favoritePageBtn);

    await waitFor(() =>
    expect(screen.getByText("Caipirinha")).toBeInTheDocument(),
    expect(screen.getByAltText("cocktail-Caipirinha")).toBeInTheDocument()
    );
  })

  it("When user on the favorites page, by clicking on welcome page they will be redirected to the welcome page", async() => {
    render(
      <MemoryRouter initialEntries={["/favorites"]}>
        <App />
      </MemoryRouter>
    );

    await waitFor(() => expect(screen.getByTestId("favorite-drinks-element")).toBeInTheDocument());

    const welcomePageBtn = await waitFor(() => screen.getByTestId("welcome-page-link"));
  
    userEvent.click(welcomePageBtn);
    
    await waitFor(() => expect(screen.getByTestId("welcome-page-element")).toBeInTheDocument());
  })
});
