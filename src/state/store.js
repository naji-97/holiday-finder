import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './countryReducer';
import holidayReducer from './holidayReducer';

const store = configureStore({
  reducer: {
    countries: countryReducer,
    holiday: holidayReducer,
  },
});

export default store;
