import React from 'react'
import { NavLink } from 'react-router-dom'
import "./styles/countryList.css"

function Country({ name, continent, capital, population, flag, timezones, countryCode, handleCountryClick }) {
 return (
  <div className='container'>
  <div className='wrap'>
    <NavLink to={`/holidays/${countryCode}`} onClick={() => handleCountryClick(countryCode)} className='country'>
    <div className='info'>
      <p  className='country-name'>Name :{name}</p>
      <p> Continent :{continent}</p>
      <p> Capital :{capital}</p>
      <p>Population {population}</p>
      </div>
      <div className='flag'>
       <img src={flag}/>
      </div>
    </NavLink>
  </div>
</div>

 )
}

export default Country