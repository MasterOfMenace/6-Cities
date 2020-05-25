import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, Router, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Main from '../main/main.jsx';
import OfferDetails from '../offer-details/offer-details.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import {ActionCreator as AppActionCreator} from '../../reducer/app-reducer/app-reducer.js';
import {getCity, getPopupStatus, getErrMessage} from '../../reducer/app-reducer/selectors.js';
import {getOffers, getCities} from '../../reducer/data/selectors.js';
import {Operation as UserOperation, AuthorizationStatus} from '../../reducer/user/user.js';
import {getAuthorizationStatus, getUserInfo} from '../../reducer/user/selectors.js';
import history from '../../history.js';
import Favorites from '../favorites/favorites.jsx';
import {store} from '../../index.js';

class App extends React.PureComponent {
  _renderApp() {
    const {
      offers,
      city,
      cities,
      cityChangeHandler,
      authorizationStatus,
      userInfo,
      isPopupShow,
      onPopupButtonClick,
      errMessage
    } = this.props;

    store.dispatch(AppActionCreator.blurOffer());

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
        onPopupButtonClick={onPopupButtonClick}
        errMessage={errMessage}
      />
    );
  }

  render() {
    const {login, authorizationStatus} = this.props;

    const isAuth = authorizationStatus === AuthorizationStatus.AUTH;

    return (
      <Router basename ="/6-Cities" history={history}>
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
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.arrayOf(PropTypes.number).isRequired,
    zoom: PropTypes.number.isRequired
  }),
  cities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.arrayOf(PropTypes.number).isRequired,
    zoom: PropTypes.number.isRequired
  })),
  cityChangeHandler: PropTypes.func.isRequired,
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
  authorizationStatus: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  userInfo: PropTypes.oneOfType([
    PropTypes.shape({
      avatarUrl: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isPro: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired
    }),
    PropTypes.object
  ]),
  isPopupShow: PropTypes.bool.isRequired,
  onPopupButtonClick: PropTypes.func.isRequired,
  errMessage: PropTypes.string
};

const mapStateToProps = (state) => ({
  offers: getOffers(state),
  cities: getCities(state),
  city: getCity(state),
  authorizationStatus: getAuthorizationStatus(state),
  userInfo: getUserInfo(state),
  isPopupShow: getPopupStatus(state),
  errMessage: getErrMessage(state)
});

const mapDispatchToProps = (dispatch) => ({
  cityChangeHandler(city) {
    dispatch(AppActionCreator.changeCity(city));
  },

  login(authData) {
    dispatch(UserOperation.login(authData));
  },

  onPopupButtonClick() {
    dispatch(AppActionCreator.changePopupStatus(false));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
