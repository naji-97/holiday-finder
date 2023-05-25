// holidayList.js

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchHolidaysByCountryAsync } from '../state/holidayReducer';
import './styles/holidayList.css';

const HolidayList = () => {
  const { countryCode } = useParams();
  const lowerCountryCode = countryCode.toLowerCase();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHolidaysByCountryAsync(lowerCountryCode));
  }, [dispatch, lowerCountryCode]);

  const holidays = useSelector((state) => state.holiday.holidays.holidays);

  return (
    <div className="holiday-list">
      <h2 className="holiday-title">Holiday List</h2>
      <table className="holiday-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Observed</th>
            <th>Type</th>
            <th>Public</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {holidays && holidays.length > 0 && holidays.map((holiday) => (
            <tr key={holiday.id}>
              <td>{holiday.name}</td>
              <td>{holiday.date}</td>
              <td>{holiday.observed}</td>
              <td>{holiday.type}</td>
              <td>{holiday.public ? 'Yes' : 'No'}</td>
              <td>{holiday.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HolidayList;
