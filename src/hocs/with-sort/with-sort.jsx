import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {sortOffers} from '../../utils';
import {getCurrentSortType} from '../../reducer/app-reducer/selectors.js';

const withSort = (Component) => {
  const WithSort = (props) => {
    const {offers, sortType} = props;
    const sortedOffers = sortOffers(offers, sortType);
    return <Component {...props} offers={sortedOffers} />;
  };

  WithSort.propTypes = {
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
    sortType: PropTypes.string.isRequired
  };

  const mapStateToProps = (state) => ({
    sortType: getCurrentSortType(state)
  });

  return connect(mapStateToProps, null)(WithSort);
};

export default withSort;
