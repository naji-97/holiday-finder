import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/countryList.css';
import PropTypes from 'prop-types';

function Country({
  name, continent, capital, population, flag, countryCode, handleCountryClick,
}) {
  return (
    <div className="container">
      <div className="wrap">
        <NavLink to={`/holidays/${countryCode}`} onClick={() => handleCountryClick(countryCode)} className="country">
          <div className="info">
            <p className="country-name">
              Name :
              {name}
            </p>
            <p>
              {' '}
              Continent :
              {continent}
            </p>
            <p>
              {' '}
              Capital :
              {capital}
            </p>
            <p>
              Population
              {population}
            </p>
          </div>
          <div className="flag">
            <img src={flag} alt="flag" />
          </div>
        </NavLink>
      </div>
    </div>

  );
}

Country.propTypes = {
  name: PropTypes.string.isRequired,
  continent: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  flag: PropTypes.string.isRequired,
  countryCode: PropTypes.string.isRequired,
  handleCountryClick: PropTypes.func.isRequired,
};

export default Country;
