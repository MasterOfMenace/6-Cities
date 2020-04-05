import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {OfferRenderType} from '../../const.js';
import OfferCard from '../offer-card/offer-card.jsx';
import {ActionCreator as AppActionCreator} from '../../reducer/app-reducer/app-reducer.js';
import {Operation as DataOperation} from '../../reducer/data/data.js';

const OffersList = (props) => {
  const {
    offers,
    type,
    onMouseOver,
    onMouseLeave,
    onFavoriteButtonClick,
    isAuth
  } = props;
  const className = type === OfferRenderType.MAIN ? `cities__places-list places__list tabs__content` : `near-places__list places__list`;

  return (
    <div className={className}>
      {offers.map((offer, index) => (
        <OfferCard
          key={index}
          offer={offer}
          onMouseOver={()=>{
            onMouseOver(offer);
          }}
          onMouseLeave={()=>{
            onMouseLeave();
          }}
          onFavoriteButtonClick={onFavoriteButtonClick}
          type={type}
          isAuth={isAuth}/>
      ))}
    </div>
  );
};

OffersList.propTypes = {
  type: PropTypes.oneOf([OfferRenderType.MAIN, OfferRenderType.NEIGHBORHOOD]).isRequired,
  onMouseOver: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
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
  onFavoriteButtonClick: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired
};

const mapDispatchToProps = (dispatch) => ({
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

export {OffersList};
export default connect(null, mapDispatchToProps)(OffersList);
