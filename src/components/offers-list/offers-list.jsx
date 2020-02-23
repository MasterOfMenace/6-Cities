import React from 'react';
import PropTypes from 'prop-types';
import {OfferRenderType} from '../../const.js';
import OfferCard from '../offer-card/offer-card.jsx';

class OffersList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      offer: null
    };
  }

  render() {
    const {offers, titleClickHandler, type} = this.props;

    const className = type === OfferRenderType.MAIN ? `cities__places-list places__list tabs__content` : `near-places__list places__list`;

    return (
      <div className={className}>
        {offers.map((offer, index) => (
          <OfferCard
            key={index}
            offer={offer}
            onMouseOver={() => {
              this.setState({
                offer: offer.id
              });
            }}
            onMouseLeave={() => {
              this.setState({
                offer: null
              });
            }}
            titleClickHandler={titleClickHandler}
            type={type}/>
        ))}
      </div>
    );
  }
}

OffersList.propTypes = {
  type: PropTypes.oneOf([OfferRenderType.MAIN, OfferRenderType.NEIGHBORHOOD]).isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({
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
  })).isRequired,
  titleClickHandler: PropTypes.func.isRequired
};

export default OffersList;
