import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import { fetchHolidaysByCountryAsync } from '../state/holidayReducer';
import { fetchCountry } from '../state/countryReducer';
import Country from './Country';
import './styles/countryList.css';

const CountryList = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countries);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(fetchCountry());
    }
  }, [countries.length, dispatch]);

  const handleCountryClick = (countryCode) => {
    const formattedCountryCode = countryCode.toLowerCase();
    dispatch(fetchHolidaysByCountryAsync(formattedCountryCode));
  };

  const filteredCountries = countries.filter((country) => country.name.toLowerCase()
    .includes(searchQuery.toLowerCase()));
  return (
    <div className="main">
      <div className="dropdown">
        <h1 className="title">
          Discover Holidays Worldwide
          <FaSearch className="search" />
        </h1>
        <input
          type="text"
          placeholder="Search country..."
          className=" select search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

      </div>
      <ul className="countries">

        {filteredCountries.map((country) => (
          <Country
            key={country.countryCode}
            countryCode={country.countryCode}
            name={country.name}
            continent={country.continent}
            population={country.population}
            flag={country.flagPng}
            capital={country.capital}
            timezones={country.timezones}
            handleCountryClick={handleCountryClick}
          />
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
