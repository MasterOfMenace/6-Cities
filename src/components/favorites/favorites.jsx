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

const Favorites = (props) => {
  const {
    authorizationStatus,
    userInfo,
    favoriteOffers,
    onMouseLeave,
    onMouseOver,
    // titleClickHandler,
    onFavoriteButtonClick,
  } = props;

  const isAuth = authorizationStatus === AuthorizationStatus.AUTH;

  const favoritesCities = Array.from(
      new Set(favoriteOffers.map((offer) => offer.city.name))
  );

  return (
    <div className="page">
      <Header isAuth={isAuth} userInfo={userInfo} />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
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
                          // titleClickHandler={titleClickHandler}
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
        </div>
      </main>
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

  // titleClickHandler(id) {
  //   dispatch(AppActionCreator.selectOffer());
  //   dispatch(DataOperation.loadReviews(id));
  //   dispatch(DataOperation.loadNeighbors(id));
  // },

  onFavoriteButtonClick(id, status) {
    dispatch(DataOperation.toggleFavorite(id, status));
  }
});

export {Favorites};
export default connect(mapStateToProps, mapDispatchToPRops)(Favorites);
