/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Country from '../components/Country';

test('Country component renders correctly', () => {
  const country = {
    name: ' United States',
    continent: 'North America',
    capital: 'Washington, D.C.',
    population: 331002651,
    flag: 'usa-flag.jpg',
    countryCode: 'us',
    handleCountryClick: jest.fn(),
  };

  render(
    <MemoryRouter>

      <Country {...country} />
    </MemoryRouter>,
  );

  // Check if the country information is rendered correctly
  expect(screen.getByTestId('country-info')).toBeInTheDocument();
  expect(screen.getByTestId('info')).toBeInTheDocument();
  expect(screen.getByTestId('country-name')).toHaveTextContent('Name: United States');
  expect(screen.getByTestId('continent')).toHaveTextContent('Continent :North America');
  expect(screen.getByTestId('capital')).toHaveTextContent('Capital : Washington, D.C.');
  expect(screen.getByTestId('population')).toHaveTextContent('Population :331002651');

  // Check if the flag is rendered correctly
  const flagImage = screen.getByAltText('flag');
  expect(flagImage).toBeInTheDocument();
  expect(flagImage.getAttribute('src')).toBe('usa-flag.jpg');
});
