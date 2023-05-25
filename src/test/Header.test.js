import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/Header';

describe('Header', () => {
  test('renders NavBar when not in holidays route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>,
    );

    const navBarElement = screen.getByTestId('navbar');
    expect(navBarElement).toBeInTheDocument();
  });

  test('does not render NavBar in holidays route', () => {
    render(
      <MemoryRouter initialEntries={['/holidays/US']}>
        <Header />
      </MemoryRouter>,
    );

    const navBarElement = screen.queryByTestId('navbar');
    expect(navBarElement).not.toBeInTheDocument();
  });

  test('renders back button when not in home route', () => {
    render(
      <MemoryRouter initialEntries={['/holidays/US']}>
        <Header />
      </MemoryRouter>,
    );

    const backButtonElement = screen.getByAltText('back');
    expect(backButtonElement).toBeInTheDocument();
  });

  test('does not render back button in home route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>,
    );

    const backButtonElement = screen.queryByAltText('back');
    expect(backButtonElement).not.toBeInTheDocument();
  });
});
