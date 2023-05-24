import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

// const fetchCountryAsync = async () => {
//   const response = await fetch(`https://restcountries.com/v3.1/all`);
//   const data = await response.json();
//   return data;
// };

export const fetchCountry = createAsyncThunk('countries/fetchCountry', async () => {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/all`);
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
  reducers: {
    // setCountry: (state, action) => {
    //   state.countries = action.payload;
    // },
  },
  extraReducers(builder) {
    builder
      .addCase('countries/fetchCountry/pending', state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase('countries/fetchCountry/fulfilled', (state, action) => {
        // console.log(action.payload);
        state.status = 'success';
        state.countries = action.payload;
      })
      .addCase('countries/fetchCountry/rejected', (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      });
  }
  
});

// export const { setCountry } = countrySlice.actions;
export default countrySlice.reducer;
