import React from 'react';
import PropTypes from 'prop-types';
import OffersList from '../offers-list/offers-list.jsx';
import Map from '../map/map.jsx';
import {OfferRenderType} from '../../const.js';
import CitiesList from '../cities-list/cities-list.jsx';

const getCities = (offers) => {
  const cities = offers.map((offer) => offer.city.name);
  const set = new Set(cities);
  return Array.from(set);
};

const Main = ({offerCount, currentOffers, offers, city, cityChangeHandler}) => {
  const locations = currentOffers.map((offer) => offer.location);
  const cities = getCities(offers);
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
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList
            cities={cities}
            currentCity={city}
            cityChangeHandler={cityChangeHandler}/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offerCount} places to stay in {city.name}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>

                {/* <select className="places__sorting-type" id="places-sorting">
                  <option className="places__option" value="popular" selected="">Popular</option>
                  <option className="places__option" value="to-high">Price: low to high</option>
                  <option className="places__option" value="to-low">Price: high to low</option>
                  <option className="places__option" value="top-rated">Top rated first</option>
                </select> */}

              </form>
              <OffersList
                offers={currentOffers}
                type={OfferRenderType.MAIN}/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  offersLocations={locations}
                  cityLocation={city.location}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  city: PropTypes.object.isRequired,
  cityChangeHandler: PropTypes.func.isRequired,
  offerCount: PropTypes.number.isRequired,
  currentOffers: PropTypes.array.isRequired,
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
