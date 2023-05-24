import React from 'react';
import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { fetchHolidaysByCountry } from '../state/holidayReducer';
import './styles/holidayList.css';

const HolidayList = () => {
  // const holidays = useState((state)=> state)
  const holidays = useSelector((state) => state.holiday.holidays.holidays);
  // console.log(holidays);
  return (
    <div>
      <h2>Holiday List</h2>
      <ul className="holiday-list">
        {holidays && holidays.length > 0 && holidays.map((holiday) => (
          <li key={holiday.id}>
            <h3>{holiday.name}</h3>
            <p>
              Date:
              {holiday.date}
            </p>
            <p>
              Observed:
              {holiday.observed}
            </p>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default HolidayList;
