import React from 'react';
import PropTypes from 'prop-types';
import CitiesList from '../cities-list/cities-list.jsx';
import {getCurrentOffers} from '../../utils.js';
import Places from '../places/places.jsx';
import PlacesEmpty from '../places-empty/places-empty.jsx';

const getCities = (offers) => {
  const cities = offers.map((offer) => offer.city.name);
  const set = new Set(cities);
  return Array.from(set);
};

const Main = ({offers, city, cityChangeHandler}) => {
  const currentOffers = getCurrentOffers(offers, city);
  const cities = getCities(offers);
  const isEmpty = currentOffers.length === 0 ? true : false;
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className={`page__main page__main--index ${isEmpty ? `page__main--index-empty` : ``}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList
            cities={cities}
            currentCity={city}
            cityChangeHandler={cityChangeHandler}/>
        </div>
        <div className="cities">
          {isEmpty ?
            <PlacesEmpty
              city={city}
            />
            :
            <Places
              offers={offers}
              city={city}
            />}
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  city: PropTypes.object.isRequired,
  cityChangeHandler: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    location: PropTypes.arrayOf(PropTypes.number).isRequired,
    reviews: PropTypes.arrayOf(PropTypes.shape({
      author: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired
    })).isRequired
  })).isRequired,
};

export default Main;
