import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {OfferRenderType} from '../../const.js';
import OfferCard from '../offer-card/offer-card.jsx';
import {ActionCreator as AppActionCreator} from '../../reducer/app/app.js';

const OffersList = ({offers, titleClickHandler, type, onMouseOver, onMouseLeave}) => {
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
          titleClickHandler={titleClickHandler}
          type={type}/>
      ))}
    </div>
  );
};

OffersList.propTypes = {
  type: PropTypes.oneOf([OfferRenderType.MAIN, OfferRenderType.NEIGHBORHOOD]).isRequired,
  onMouseOver: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  // offers: PropTypes.arrayOf(PropTypes.shape({
  //   id: PropTypes.number.isRequired,
  //   city: PropTypes.object.isRequired,
  //   name: PropTypes.string.isRequired,
  //   picture: PropTypes.string.isRequired,
  //   price: PropTypes.number.isRequired,
  //   type: PropTypes.string.isRequired,
  //   location: PropTypes.arrayOf(PropTypes.number).isRequired,
  //   reviews: PropTypes.arrayOf(PropTypes.shape({
  //     author: PropTypes.string.isRequired,
  //     avatar: PropTypes.string.isRequired,
  //     text: PropTypes.string.isRequired,
  //     time: PropTypes.string.isRequired
  //   })).isRequired
  // })).isRequired,
  offers: PropTypes.array,
  titleClickHandler: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onMouseOver(offer) {
    dispatch(AppActionCreator.hoverOffer(offer));
  },

  onMouseLeave() {
    dispatch(AppActionCreator.blurOffer());
  },

  titleClickHandler() {
    dispatch(AppActionCreator.selectOffer());
  }
});

export {OffersList};
export default connect(null, mapDispatchToProps)(OffersList);
