import React from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card.jsx';

class OffersList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      offer: null
    };
  }

  render() {
    const {offers, titleClickHandler} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
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
            titleClickHandler={titleClickHandler}/>
        ))}
      </div>
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    location: PropTypes.arrayOf(PropTypes.number).isRequired
  })).isRequired,
  titleClickHandler: PropTypes.func.isRequired
};

export default OffersList;
