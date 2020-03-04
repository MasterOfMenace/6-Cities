import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Main from '../main/main.jsx';
import OfferDetails from '../offer-details/offer-details.jsx';
import {ActionCreator} from '../../reducer.js';
import {getCurrentOffers} from '../../utils.js';

class App extends React.PureComponent {
  _renderApp() {
    const {offers, selectedOffer, city, cityChangeHandler, sortType} = this.props;

    if (!selectedOffer) {
      return (
        <Main
          offers={offers}
          city={city}
          cityChangeHandler={cityChangeHandler}
          sortType={sortType}
        />
      );
    }

    if (selectedOffer) {
      return (
        <OfferDetails
          offers={offers}
          id={selectedOffer}
          city={city}
        />
      );
    }

    return null;
  }

  render() {
    const {offers, city} = this.props;
    const currentOffers = getCurrentOffers(offers, city);
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
  sortType: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  sortType: state.currentSortType,
  selectedOffer: state.selectedOffer,
  city: state.city
});

const mapDispatchToProps = (dispatch) => ({
  cityChangeHandler(city) {
    dispatch(ActionCreator.changeCity(city));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
