import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import SortList from '../sort-list/sort-list.jsx';
import OffersList from '../offers-list/offers-list.jsx';
import Map from '../map/map.jsx';
import withOpen from '../../hocs/with-open/with-open.jsx';
import withSort from '../../hocs/with-sort/with-sort.jsx';
import {getCurrentOffers} from '../../utils.js';
import {OfferRenderType} from '../../const.js';
import {getHoveredOffer} from '../../reducer/app-reducer/selectors.js';

const SortListWithOpen = withOpen(SortList);
const OffersListWithSort = withSort(OffersList);

const Places = (props) => {
  const {offers, city, isAuth, currentOfferId} = props;
  const currentOffers = getCurrentOffers(offers, city);
  const offersCount = currentOffers.length;
  const locations = currentOffers.map((offer) => offer.location);
  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offersCount} places to stay in {city.name}</b>
        <SortListWithOpen />
        <OffersListWithSort
          offers={currentOffers}
          type={OfferRenderType.MAIN.type}
          isAuth={isAuth}/>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map
            offers={currentOffers}
            currentOfferId={currentOfferId}
            offersLocations={locations}
            city={city}/>
        </section>
      </div>
    </div>
  );
};

Places.propTypes = {
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
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.arrayOf(PropTypes.number).isRequired,
    zoom: PropTypes.number.isRequired
  }),
  isAuth: PropTypes.bool.isRequired,
  currentOfferId: PropTypes.number
};

const mapStateToProps = (state) => ({
  currentOfferId: getHoveredOffer(state)
});

export {Places};
export default connect(mapStateToProps, null)(Places);
