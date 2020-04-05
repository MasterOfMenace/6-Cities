import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, Router, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Main from '../main/main.jsx';
import OfferDetails from '../offer-details/offer-details.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import {ActionCreator as AppActionCreator} from '../../reducer/app-reducer/app-reducer.js';
import {getCity, getPopupStatus} from '../../reducer/app-reducer/selectors.js';
import {getOffers, getCities} from '../../reducer/data/selectors.js';
import {Operation as UserOperation, AuthorizationStatus} from '../../reducer/user/user.js';
import {getAuthorizationStatus, getUserInfo} from '../../reducer/user/selectors.js';
import history from '../../history.js';
import Favorites from '../favorites/favorites.jsx';

class App extends React.PureComponent {
  _renderApp() {
    const {
      offers,
      city,
      cities,
      cityChangeHandler,
      authorizationStatus,
      userInfo,
      isPopupShow
    } = this.props;

    const isAuth = authorizationStatus === AuthorizationStatus.AUTH;

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

  render() {
    const {login, authorizationStatus} = this.props;

    const isAuth = authorizationStatus === AuthorizationStatus.AUTH;

    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/login">
            {!isAuth
              ? <SignIn
                onSubmit={login}
              />
              : <Redirect to={`/`} />
            }
          </Route>
          <Route exact path="/offer/:id" component={OfferDetails}/>
          <Route exact path="/favorites">
            {isAuth
              ? <Favorites />
              : <Redirect to={`/login`} />
            }

          </Route>
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  city: PropTypes.object,
  cities: PropTypes.array,
  cityChangeHandler: PropTypes.func.isRequired,
  offers: PropTypes.array.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  userInfo: PropTypes.object,
  isPopupShow: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  offers: getOffers(state),
  cities: getCities(state),
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
