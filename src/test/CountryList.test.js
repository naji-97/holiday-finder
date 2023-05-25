import { useSelector } from 'react-redux';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('CountryList component', () => {
  it('renders correctly', () => {
    useSelector.mockImplementation((selector) => selector({
      countries: {
        countries: [
          {
            countryCode: 'US',
            name: 'United States',
            continent: 'North America',
            population: 331449281,
            flagPng: 'https://example.com/flag.png',
            capital: 'Washington, D.C.',
            timezones: ['UTC-05:00', 'UTC-04:00'],
          },
          // Add more sample countries here if needed
        ],
      },
    }));
  });
});
