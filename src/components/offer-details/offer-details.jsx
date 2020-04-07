import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ReviewsList from '../reviews-list/reviews-list.jsx';
import Map from '../map/map.jsx';
import OffersList from '../offers-list/offers-list.jsx';
import ReviewForm from '../review-form/review-form.jsx';
import ErrorPopup from '../error-popup/error-popup.jsx';
import Header from '../header/header.jsx';
import {OfferRenderType, OfferType} from '../../const.js';
import {formatRating} from '../../utils.js';
import {Operation as DataOperation} from '../../reducer/data/data.js';
import {getNeighbors, getReviews, getOffers} from '../../reducer/data/selectors.js';
import {ActionCreator as AppActionCreator} from '../../reducer/app-reducer/app-reducer.js';
import {getPopupStatus, getCity, getErrMessage} from '../../reducer/app-reducer/selectors.js';
import {getAuthorizationStatus, getUserInfo} from '../../reducer/user/selectors.js';
import {AuthorizationStatus} from '../../reducer/user/user.js';
import history from '../../history.js';
import {store} from '../../index.js';

const MAX_GALLERY_IMAGES = 6;

class OfferDetails extends React.PureComponent {
  constructor(props) {
    super(props);

    this.id = Number(props.match.params.id);

    store.dispatch(DataOperation.loadReviews(this.id));
    store.dispatch(DataOperation.loadNeighbors(this.id));
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.id = Number(this.props.match.params.id);

      store.dispatch(DataOperation.loadReviews(this.id));
      store.dispatch(DataOperation.loadNeighbors(this.id));
    }
  }

  render() {
    const {
      offers,
      city,
      authorizationStatus,
      userInfo,
      neighbors,
      reviews,
      onSubmit,
      isPopupShow,
      errMessage,
      onPopupButtonClick,
      onFavoriteButtonClick
    } = this.props;

    const isAuth = authorizationStatus === AuthorizationStatus.AUTH;
    const currentOffer = offers.find(({id}) => id === this.id);

    const neighborsLocations = neighbors.map((offer) => offer.location);


    const host = currentOffer.host;
    const gallery = currentOffer.images.slice(0, MAX_GALLERY_IMAGES);

    return (
      <div className="page">
        <Header isAuth={isAuth} userInfo={userInfo} />
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
                  <button
                    className={`property__bookmark-button ${currentOffer.isFavorite ? `place-card__bookmark-button--active` : ``} button`}
                    type="button"
                    onClick={isAuth ? () => {
                      onFavoriteButtonClick(currentOffer.id, currentOffer.isFavorite);
                    } : () => history.push(`/login`)}
                  >
                    <svg className="property__bookmark-icon place-card__bookmark-icon" width="31" height="33">
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
                    {OfferType[currentOffer.type]}
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
                      <img className="property__avatar user__avatar" src={`/${host.avatarUrl}`} width="74" height="74" alt="Host avatar"/>
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
                  {isAuth ? <ReviewForm onSubmit={onSubmit} id={this.id}/> : null}
                </section>
              </div>
            </div>
            <section className="property__map map">
              <Map
                currentOfferId={this.id}
                offers={offers}
                offersLocations={neighborsLocations}
                city={city}/>
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <OffersList
                offers={neighbors}
                type={OfferRenderType.NEIGHBORHOOD.type}
                isAuth={isAuth}/>
            </section>
          </div>
        </main>
        {isPopupShow ? <ErrorPopup message={errMessage} onButtonClick={onPopupButtonClick}/> : null}
      </div>
    );
  }
}

OfferDetails.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.arrayOf(PropTypes.number).isRequired,
    zoom: PropTypes.number.isRequired
  }),
  id: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
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
  authorizationStatus: PropTypes.string.isRequired,
  neighbors: PropTypes.arrayOf(PropTypes.shape({
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
  reviews: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isPro: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired
    }),
    id: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  })).isRequired,
  onSubmit: PropTypes.func.isRequired,
  isPopupShow: PropTypes.bool.isRequired,
  onPopupButtonClick: PropTypes.func.isRequired,
  errMessage: PropTypes.string,
  onFavoriteButtonClick: PropTypes.func.isRequired,
  match: PropTypes.any,
};

const mapStateToProps = (state) => ({
  offers: getOffers(state),
  neighbors: getNeighbors(state),
  reviews: getReviews(state),
  isPopupShow: getPopupStatus(state),
  errMessage: getErrMessage(state),
  authorizationStatus: getAuthorizationStatus(state),
  userInfo: getUserInfo(state),
  city: getCity(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(id, form, data) {
    dispatch(DataOperation.postReview(id, form, data));
  },

  onPopupButtonClick() {
    dispatch(AppActionCreator.changePopupStatus(false));
  },

  onFavoriteButtonClick(id, status) {
    dispatch(DataOperation.toggleFavorite(id, status));
  }
});

export {OfferDetails};
export default connect(mapStateToProps, mapDispatchToProps)(OfferDetails);
