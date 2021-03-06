import React from 'react';
import PropTypes from 'prop-types';

const CitiesList = ({cities, currentCity, cityChangeHandler}) => {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city, index) => (
          <li key={index} className="locations__item">
            <a className={`locations__item-link tabs__item ${city.name === currentCity.name ? `tabs__item--active` : ``}`} href="#" onClick={() => {
              cityChangeHandler(city);
            }}>
              <span>{city.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

CitiesList.propTypes = {
  cityChangeHandler: PropTypes.func.isRequired,
  cities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.arrayOf(PropTypes.number).isRequired,
    zoom: PropTypes.number.isRequired
  })),
  currentCity: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.arrayOf(PropTypes.number).isRequired,
    zoom: PropTypes.number.isRequired
  })
};

export default CitiesList;
