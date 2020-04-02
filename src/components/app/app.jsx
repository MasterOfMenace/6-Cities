import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Main from '../main/main.jsx';
import OfferDetails from '../offer-details/offer-details.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import {ActionCreator as AppActionCreator} from '../../reducer/app-reducer/app-reducer.js';
import {getSelectedOffer, getCity, getPopupStatus} from '../../reducer/app-reducer/selectors.js';
import {getOffers, getCities} from '../../reducer/data/selectors.js';
import {Operation as UserOperation, AuthorizationStatus} from '../../reducer/user/user.js';
import {getAuthorizationStatus, getUserInfo} from '../../reducer/user/selectors.js';

class App extends React.PureComponent {
  _renderApp() {
    const {
      offers,
      selectedOffer,
      city,
      cities,
      cityChangeHandler,
      authorizationStatus,
      userInfo,
      login,
      isPopupShow
    } = this.props;

    const isAuth = authorizationStatus === AuthorizationStatus.AUTH;

    if (!isAuth) {
      return (
        <SignIn onSubmit={login}/>
      );
    }

    if (!selectedOffer) {
      return (
        <Main
          offers={offers}
          cities={cities}
          city={city}
          cityChangeHandler={cityChangeHandler}
          isAuth={isAuth}
          userInfo={userInfo}
          isPopupShow={isPopupShow}
        />
      );
    }

    if (selectedOffer) {
      return (
        <OfferDetails
          offers={offers}
          id={selectedOffer}
          city={city}
          isAuth={isAuth}
          userInfo={userInfo}
        />
      );
    }

    return null;
  }

  render() {
    const {offers, city, login} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-details">
            <OfferDetails
              offers={offers}
              id={1}
              city={city}
            />
          </Route>
          <Route exact path="/sign-in">
            <SignIn
              onSubmit={login}
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
  authorizationStatus: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  userInfo: PropTypes.object,
  isPopupShow: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  offers: getOffers(state),
  cities: getCities(state),
  selectedOffer: getSelectedOffer(state),
  city: getCity(state),
  authorizationStatus: getAuthorizationStatus(state),
  userInfo: getUserInfo(state),
  isPopupShow: getPopupStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  cityChangeHandler(city) {
    dispatch(AppActionCreator.changeCity(city));
  },

  login(authData) {
    dispatch(UserOperation.login(authData));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
