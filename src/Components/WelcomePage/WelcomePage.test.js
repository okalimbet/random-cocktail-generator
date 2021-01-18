import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history'
import WelcomePage from './index.js';

describe("WelcomePage", () => {

  it("Should render all main elements correctly", () => {
    render(<WelcomePage/>, { wrapper: MemoryRouter });

    expect(screen.getByText("Had a tough day in the office? Shake it up with a drink, you deserve this!")).toBeInTheDocument();
    expect(screen.getByText("SHAKE")).toBeInTheDocument();
  })

  it("Users should be able click on the button to be sent to a random recipe page", async() => {
    const history = createMemoryHistory();
    render(<Router history={history}><WelcomePage/></Router>);

    const shakeBtn = screen.getByText("SHAKE");

    userEvent.click(shakeBtn);

    await waitFor(() => expect(history.location.pathname).toBe("/recipe"));
  })
})