import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Main from '../main/main.jsx';
import OfferDetails from '../offer-details/offer-details.jsx';
import {ActionCreator as AppActionCreator} from '../../reducer/app-reducer/app-reducer.js';
import {getOffers, getCities} from '../../reducer/data/selectors.js';
import {getSelectedOffer, getCity} from '../../reducer/app-reducer/selectors.js';

class App extends React.PureComponent {
  _renderApp() {
    const {
      offers,
      selectedOffer,
      city,
      cities,
      cityChangeHandler
    } = this.props;

    if (!selectedOffer) {
      return (
        <Main
          offers={offers}
          cities={cities}
          city={city}
          cityChangeHandler={cityChangeHandler}
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
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-details">
            <OfferDetails
              offers={offers}
              id={offers[0]}
              city={city}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  city: PropTypes.object,
  cities: PropTypes.array,
  cityChangeHandler: PropTypes.func.isRequired,
  selectedOffer: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  offers: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  offers: getOffers(state),
  cities: getCities(state),
  selectedOffer: getSelectedOffer(state),
  city: getCity(state)
});

const mapDispatchToProps = (dispatch) => ({
  cityChangeHandler(city) {
    dispatch(AppActionCreator.changeCity(city));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
