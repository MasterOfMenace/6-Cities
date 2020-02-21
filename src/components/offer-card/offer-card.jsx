import React from 'react';
import PropTypes from 'prop-types';
import {OfferRenderType} from '../../const.js';

const OfferCard = ({offer, onMouseOver, onMouseLeave, titleClickHandler, type}) => {
  const isMain = type === OfferRenderType.MAIN;

  return (
    <article className={`${isMain ? `cities__place-card` : `near-places__card`} place-card`}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}>
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className={`${isMain ? `cities__image-wrapper` : `near-places__image-wrapper`} place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={offer.picture} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `80%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#" onClick={() => titleClickHandler(offer.id)}
          >{offer.name}</a>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  type: PropTypes.oneOf([OfferRenderType.MAIN, OfferRenderType.NEIGHBORHOOD]).isRequired,
  titleClickHandler: PropTypes.func.isRequired,
  onMouseOver: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  offer: PropTypes.shape({
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
  }).isRequired
};

export default OfferCard;
