import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import ErrorPage from './index.js';

describe("ErrorPage", () => {

  it("should render correctly", () => {
    render(<ErrorPage />, { wrapper: MemoryRouter });

    expect(screen.getByText("OOPS!")).toBeInTheDocument();
    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
    expect(screen.getByText("Please, try again later")).toBeInTheDocument();
  })
})