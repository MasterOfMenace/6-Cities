import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Main from '../main/main.jsx';
import OfferDetails from '../offer-details/offer-details.jsx';
import {ActionCreator} from '../../reducer.js';

class App extends React.PureComponent {
  _renderApp() {
    const {offers, currentOffers, selectedOffer, city, cityChangeHandler} = this.props;

    const offersCount = currentOffers.length;

    if (!selectedOffer) {
      return (
        <Main
          offerCount={offersCount}
          currentOffers={currentOffers}
          offers={offers}
          city={city}
          cityChangeHandler={cityChangeHandler}
        />
      );
    }

    if (selectedOffer) {
      return (
        <OfferDetails
          offers={currentOffers}
          id={selectedOffer}
          city={city}
        />
      );
    }

    return null;
  }

  render() {
    const {currentOffers, city} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-details">
            <OfferDetails
              offers={currentOffers}
              id={currentOffers[0].id}
              city={city}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  city: PropTypes.object.isRequired,
  cityChangeHandler: PropTypes.func.isRequired,
  selectedOffer: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  offers: PropTypes.array.isRequired,
  currentOffers: PropTypes.arrayOf(PropTypes.shape({
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
  })).isRequired
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  currentOffers: state.currentOffers,
  selectedOffer: state.selectedOffer,
  city: state.city
});

const mapDispatchToProps = (dispatch) => ({
  cityChangeHandler(city) {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.getOffers());
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
