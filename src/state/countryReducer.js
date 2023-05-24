import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCountry = createAsyncThunk('countries/fetchCountry', async () => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    return data.map((country) => ({
      continent: country.continents[0],
      name: country.name.common,
      capital: country.capital,
      population: country.population,
      currencies: country.currencies,
      countryCode: country.cca2,
      flagSvg: country.flags.svg,
      flagAlt: country.flags.alt,
      flagPng: country.flags.png,
      timezones: country.timezones,
    }));
  } catch (error) {
    throw new Error('Failed to fetch countries.');
  }
});

const countrySlice = createSlice({
  name: 'countries',
  initialState: {
    countries: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCountry.pending, (state) => ({
        ...state,
        status: 'loading',
        error: null,
      }))
      .addCase(fetchCountry.fulfilled, (state, action) => ({
        ...state,
        status: 'success',
        countries: action.payload,
      }))
      .addCase(fetchCountry.rejected, (state, action) => ({
        ...state,
        status: 'error',
        error: action.error.message,
      }));
  },
});

export default countrySlice.reducer;
