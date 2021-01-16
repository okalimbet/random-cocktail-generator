import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import mockData from '../../TestData/_mockData';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import FavoritePage from './index.js';

describe("FavoritePage", () => {

  it("it should render correctly", () => {
    render(<FavoritePage favoriteRecipes={mockData.favorites}/>, { wrapper: MemoryRouter });
    expect(screen.getByText("Caipirinha")).toBeInTheDocument();
  })
})