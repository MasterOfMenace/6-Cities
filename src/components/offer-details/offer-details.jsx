import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ReviewsList from '../reviews-list/reviews-list.jsx';
import Map from '../map/map.jsx';
import OffersList from '../offers-list/offers-list.jsx';
import {OfferRenderType} from '../../const.js';
import {getCurrentOffers, formatRating} from '../../utils.js';
import {getNeighbors, getReviews} from '../../reducer/data/selectors.js';
import ReviewForm from '../review-form/review-form.jsx';
import {Operation as DataOperation} from '../../reducer/data/data.js';

const OfferDetails = ({offers, id, city, isAuth, userInfo, neighbors, reviews, onSubmit}) => {
  const currentOffers = getCurrentOffers(offers, city);
  const currentOffer = currentOffers.find((offer) => offer.id === id);
  const neighborsLocations = neighbors.map((offer) => offer.location);


  const host = currentOffer.host;
  const gallery = currentOffer.images;

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
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
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {gallery.map((src, index) => (
                <div
                  key={`offer-image-${index}`}
                  className="property__image-wrapper"
                >
                  <img className="property__image" src={src} alt="Photo studio"/>
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {currentOffer.isPremium
                ?
                <div className="property__mark">
                  <span>Premium</span>
                </div> : ``}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {currentOffer.title}
                </h1>
                <button className={`property__bookmark-button ${currentOffer.isFavorite ? `property__bookmark-button--active` : ``} button`} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${formatRating(currentOffer.rating)}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{currentOffer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {currentOffer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {currentOffer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {currentOffer.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{currentOffer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {currentOffer.goods.map((good, index) => (
                    <li
                      key={`good-${index}`}
                      className="property__inside-item">
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div
                    className={
                      `property__avatar-wrapper
                      ${host.isPro ? `property__avatar-wrapper--pro` : ``}
                      user__avatar-wrapper`
                    }>
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {currentOffer.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewsList reviews={reviews}/>
                <ReviewForm onSubmit={onSubmit} id={id}/>
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map
              offers={currentOffers}
              offersLocations={neighborsLocations}
              city={city}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OffersList
              offers={neighbors}
              type={OfferRenderType.NEIGHBORHOOD}/>
          </section>
        </div>
      </main>
    </div>
  );
};

OfferDetails.propTypes = {
  city: PropTypes.object,
  id: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  offers: PropTypes.array,
  isAuth: PropTypes.bool.isRequired,
  neighbors: PropTypes.array.isRequired,
  userInfo: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isPro: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
  }),
  reviews: PropTypes.array,
  onSubmit: PropTypes.func
};

const mapStateToProps = (state) => ({
  neighbors: getNeighbors(state),
  reviews: getReviews(state)
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(id, form, data) {
    dispatch(DataOperation.postReview(id, form, data));
  }
});

export {OfferDetails};
export default connect(mapStateToProps, mapDispatchToProps)(OfferDetails);
