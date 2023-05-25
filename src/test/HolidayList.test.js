import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { render } from '@testing-library/react';
import HolidayList from '../components/HolidayList';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));
jest.mock('react-router-dom', () => ({
  useParams: jest.fn(),
}));

describe('HolidayList component', () => {
  it('renders correctly', () => {
    const mockDispatch = jest.fn();
    const mockHolidays = [
      {
        id: 1,
        name: 'New Year',
        date: '2023-01-01',
        observed: null,
        type: 'Public',
        public: true, // Set to true for a public holiday
        country: 'United States',
      },
      // Add more sample holidays here if needed
    ];

    useDispatch.mockReturnValue(mockDispatch);
    useSelector.mockImplementation((selector) => selector({
      holiday: {
        holidays: {
          holidays: mockHolidays,
        },
      },
    }));
    useParams.mockReturnValue({ countryCode: 'US' });

    const { getByText } = render(<HolidayList />);

    // Check if the holiday table headers are rendered correctly
    expect(getByText('Name')).toBeInTheDocument();
    expect(getByText('Date')).toBeInTheDocument();
    expect(getByText('Observed')).toBeInTheDocument();
    expect(getByText('Type')).toBeInTheDocument();
    expect(getByText('Country')).toBeInTheDocument();

    // Check if the holidays are rendered correctly
    const holidayName = getByText('New Year');
    expect(holidayName).toBeInTheDocument();
    // Add more assertions for other holiday properties if needed
  });
});
