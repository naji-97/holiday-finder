import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiKey = '8b9b394acc354e4fbfaa26e7d46cb8a0';
const year = 2022;

const fetchHolidaysByCountry = async (countryCode) => {
  const response = await fetch(`https://api.getfestivo.com/v2/holidays?api_key=${apiKey}&country=${countryCode}&year=${year}`);
  const data = await response.json();
  return data;
};

export const fetchHolidaysByCountryAsync = createAsyncThunk(
  'holiday/fetchHolidaysByCountry',
  async (countryCode) => {
    const response = await fetchHolidaysByCountry(countryCode);
    return response;
  },
);

const holidaySlice = createSlice({
  name: 'holiday',
  initialState: {
    holidays: [],
    status: 'idle',
    error: '',
  },
  reducers: {
    // setHolidays: (state, action) => {
    //   state.holidays = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHolidaysByCountryAsync.pending, (state) => ({
        ...state,
        status: 'loading',

      }))
      .addCase(fetchHolidaysByCountryAsync.fulfilled, (state, action) => ({
        ...state,
        status: 'success',
        holidays: action.payload,
      }))
      .addCase(fetchHolidaysByCountryAsync.rejected, (state, action) => ({
        ...state,
        status: 'error',
        error: action.payload,
      }));
  },
});

export const { setHolidays } = holidaySlice.actions;
export default holidaySlice.reducer;
