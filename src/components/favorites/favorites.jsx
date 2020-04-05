import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Header from '../header/header.jsx';
import OfferCard from '../offer-card/offer-card.jsx';
import {ActionCreator as AppActionCreator} from '../../reducer/app-reducer/app-reducer.js';
import {Operation as DataOperation} from '../../reducer/data/data.js';
import {getUserInfo, getAuthorizationStatus} from '../../reducer/user/selectors.js';
import {getFavorites} from '../../reducer/data/selectors.js';
import {AuthorizationStatus} from '../../reducer/user/user.js';
import {OfferRenderType} from '../../const.js';
import FavoritesEmpty from '../favorites-empty/favorites-empty.jsx';

const Favorites = (props) => {
  const {
    authorizationStatus,
    userInfo,
    favoriteOffers,
    onMouseLeave,
    onMouseOver,
    onFavoriteButtonClick,
  } = props;

  const isAuth = authorizationStatus === AuthorizationStatus.AUTH;

  const favoritesCities = Array.from(
      new Set(favoriteOffers.map((offer) => offer.city.name))
  );

  const isEmpty = favoriteOffers.length === 0;

  return (
    <div className={`page ${isEmpty ? `page--favorites-empty` : null}`}>
      <Header isAuth={isAuth} userInfo={userInfo} />
      <main className={`page__main page__main--favorites${isEmpty ? `-empty` : null}`}>
        <div className="page__favorites-container container">
          {isEmpty
            ? <FavoritesEmpty />
            : <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {favoritesCities.map((city, index) => {
                  const offersInCity = favoriteOffers.filter((it) => it.city.name === city);

                  return (
                    <li key={index} className="favorites__locations-items">
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <a className="locations__item-link" href="#">
                            <span>{city}</span>
                          </a>
                        </div>
                      </div>
                      <div className="favorites__places">
                        {offersInCity.map((offer, i) => (
                          <OfferCard
                            key={`favorite-${i}`}
                            offer={offer}
                            onMouseOver={() => {
                              onMouseOver(offer);
                            }}
                            onMouseLeave={() => {
                              onMouseLeave();
                            }}
                            onFavoriteButtonClick={onFavoriteButtonClick}
                            type={OfferRenderType.FAVORITES}
                            isAuth={isAuth}
                          />
                        ))}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>
          }
        </div>
      </main>
      <footer className="footer">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
};

Favorites.propTypes = {
  authorizationStatus: PropTypes.string,
  userInfo: PropTypes.object,
  favoriteOffers: PropTypes.array,
  onMouseLeave: PropTypes.func,
  onMouseOver: PropTypes.func,
  titleClickHandler: PropTypes.func,
  onFavoriteButtonClick: PropTypes.func,
};

const mapStateToProps = (state) => ({
  userInfo: getUserInfo(state),
  authorizationStatus: getAuthorizationStatus(state),
  favoriteOffers: getFavorites(state)
});

const mapDispatchToPRops = (dispatch) => ({
  onMouseOver(offer) {
    dispatch(AppActionCreator.hoverOffer(offer));
  },

  onMouseLeave() {
    dispatch(AppActionCreator.blurOffer());
  },

  onFavoriteButtonClick(id, status) {
    dispatch(DataOperation.toggleFavorite(id, status));
  }
});

export {Favorites};
export default connect(mapStateToProps, mapDispatchToPRops)(Favorites);
