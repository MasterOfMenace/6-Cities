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
    const {offers} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer, index) => (
          <OfferCard
            key={index}
            offer={offer}
            onMouseOver={() => {
              this.setState({
                offer: index
              });
            }}
            onMouseLeave={() => {
              this.setState({
                offer: null
              });
            }}
            titleClickHandler={()=>{}}/>
        ))}
      </div>
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.array.isRequired
};

export default OffersList;
