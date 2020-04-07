import React from 'react';
import PropTypes from 'prop-types';
import history from '../../history';
import {OfferRenderType, OfferType} from '../../const.js';
import {formatRating} from '../../utils.js';
import {Link} from 'react-router-dom';

const OfferCard = (props) => {
  const {
    offer,
    onMouseOver,
    onMouseLeave,
    onFavoriteButtonClick,
    type,
    isAuth
  } = props;

  let node;

  switch (type) {
    case OfferRenderType.MAIN.type:
      node = OfferRenderType.MAIN.node;
      break;

    case OfferRenderType.NEIGHBORHOOD.type:
      node = OfferRenderType.NEIGHBORHOOD.node;
      break;

    case OfferRenderType.FAVORITES.type:
      node = OfferRenderType.FAVORITES.node;
      break;
  }

  return (
    <article className={`${node.articleClassName} place-card`}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}>
      {offer.isPremium
        ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : ``
      }
      <div className={`${node.imgWrapperClassName} place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={offer.previewImage} width={node.img.width} height={node.img.height} alt="Place image"/>
        </a>
      </div>
      <div className={node.infoWrapperClassName}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button  ${offer.isFavorite ? `place-card__bookmark-button--active` : ``} button`}
            type="button"
            onClick={isAuth ? () => {
              onFavoriteButtonClick(offer.id, offer.isFavorite);
            } : () => history.push(`/login`)}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${formatRating(offer.rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link
            to={`/offer/${offer.id}`}
          >
            {offer.title}
          </Link>
        </h2>
        <p className="place-card__type">{OfferType[offer.type]}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  type: PropTypes.oneOf([OfferRenderType.MAIN.type, OfferRenderType.NEIGHBORHOOD.type, OfferRenderType.FAVORITES.type]).isRequired,
  onFavoriteButtonClick: PropTypes.func.isRequired,
  onMouseOver: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  offer: PropTypes.shape({
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
  }),
  isAuth: PropTypes.bool.isRequired,
};

export default OfferCard;
