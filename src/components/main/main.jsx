import React from 'react';
import PropTypes from 'prop-types';
import CitiesList from '../cities-list/cities-list.jsx';
import {getCurrentOffers} from '../../utils.js';
import Places from '../places/places.jsx';
import PlacesEmpty from '../places-empty/places-empty.jsx';
import ErrorPopup from '../error-popup/error-popup.jsx';

const Main = ({offers, city, cities, cityChangeHandler, isAuth, userInfo, isPopupShow}) => {
  const currentOffers = getCurrentOffers(offers, city);
  const isEmpty = currentOffers.length === 0;
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
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                      {isAuth ? <img
                        className="user__avatar"
                        src={userInfo.avatarUrl}
                        alt="User avatar" width="20" height="20"
                      /> : ``}
                    </div>
                    {isAuth ? <span className="header__user-name user__name">{userInfo.email}</span> : <span className="header__login">Sign in</span>}
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
      {isPopupShow ? <ErrorPopup onButtonClick={()=>{}}/> : null}
    </div>
  );
};

Main.propTypes = {
  city: PropTypes.object,
  cities: PropTypes.array,
  cityChangeHandler: PropTypes.func.isRequired,
  offers: PropTypes.array,
  authStatus: PropTypes.string,
  userInfo: PropTypes.object,
  isAuth: PropTypes.bool.isRequired,
  isPopupShow: PropTypes.bool,
};

export default Main;
