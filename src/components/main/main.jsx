import React from 'react';
import PropTypes from 'prop-types';
import CitiesList from '../cities-list/cities-list.jsx';
import {getCurrentOffers} from '../../utils.js';
import Places from '../places/places.jsx';
import PlacesEmpty from '../places-empty/places-empty.jsx';
import ErrorPopup from '../error-popup/error-popup.jsx';
import Header from '../header/header.jsx';

const Main = (props) => {
  const {
    offers,
    city,
    cities,
    cityChangeHandler,
    isAuth,
    userInfo,
    isPopupShow,
    onPopupButtonClick,
    errMessage,
  } = props;

  const currentOffers = getCurrentOffers(offers, city);
  const isEmpty = currentOffers.length === 0;
  return (
    <div className="page page--gray page--main">
      <Header isAuth={isAuth} userInfo={userInfo} />
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
              isAuth={isAuth}
            />}
        </div>
      </main>
      {isPopupShow ? <ErrorPopup message={errMessage} onButtonClick={onPopupButtonClick}/> : null}
    </div>
  );
};

Main.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.arrayOf(PropTypes.number).isRequired,
    zoom: PropTypes.number.isRequired
  }),
  cities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.arrayOf(PropTypes.number).isRequired,
    zoom: PropTypes.number.isRequired
  })),
  cityChangeHandler: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({
    city: PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
    previewImage: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    goods: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    maxAdults: PropTypes.number.isRequired,
    bedrooms: PropTypes.number.isRequired,
    location: PropTypes.arrayOf(PropTypes.number.isRequired),
    host: PropTypes.shape({
      avatarUrl: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isPro: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  })),
  userInfo: PropTypes.oneOfType([
    PropTypes.shape({
      avatarUrl: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isPro: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired
    }),
    PropTypes.object
  ]),
  isAuth: PropTypes.bool.isRequired,
  isPopupShow: PropTypes.bool.isRequired,
  onPopupButtonClick: PropTypes.func.isRequired,
  errMessage: PropTypes.string
};

export default Main;
