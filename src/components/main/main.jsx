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
    isPopupShow
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
      {isPopupShow ? <ErrorPopup onButtonClick={()=>{}}/> : null}
    </div>
  );
};

Main.propTypes = {
  city: PropTypes.object.isRequired,
  cities: PropTypes.array.isRequired,
  cityChangeHandler: PropTypes.func.isRequired,
  offers: PropTypes.array.isRequired,
  userInfo: PropTypes.object,
  isAuth: PropTypes.bool.isRequired,
  isPopupShow: PropTypes.bool.isRequired,
};

export default Main;
