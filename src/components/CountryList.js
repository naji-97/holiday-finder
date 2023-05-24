import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHolidaysByCountryAsync } from '../state/holidayReducer';
import { fetchCountry } from '../state/countryReducer';
import HolidayList from './HolidayList';
import Country from './Country';
import "./styles/countryList.css"


const CountryList = () => {
  const dispatch = useDispatch();
  const countries = useSelector(state => state.countries.countries);
  const holidays = useSelector(state => state.holiday.holidays);
  const location = useLocation();
  // const [continent, setContinent] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(fetchCountry());
    }
  }, []);

  const handleCountryClick = (countryCode) => {
    const formattedCountryCode = countryCode.toLowerCase(); // Ensure the countryCode is in lowercase
    dispatch(fetchHolidaysByCountryAsync(formattedCountryCode));
  };

  const filteredCountries = countries.filter(country => {
    // Perform case-insensitive search by converting both search query and country name to lowercase
    return country.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className='main'>
      <div className='dropdown'>
        <h1 className='title'>All Countries</h1>
        <input
          type="text"
          placeholder="Search country..."
          className=" select search-input"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        {/* <select
          name='continents'
          id='continents'
          className='select'
          onChange={(e) => setContinent(e.target.value)}
        >
          <option value="all">All</option>
          <option value="Antarctica">Antarctica</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          <option value="South America">South America</option>
          <option value="North America">North America</option>
        </select> */}
      </div>
      <ul className='countries'>
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

      {/* Render the HolidayList component when holidays are available */}
      {holidays && holidays.length > 0 && <HolidayList holidays={holidays} />}
    </div>
  );
};

export default CountryList;
