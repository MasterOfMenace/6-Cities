import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Main from '../main/main.jsx';
import OfferDetails from '../offer-details/offer-details.jsx';

class App extends React.PureComponent {
  _renderApp() {
    const {currentOffers, selectedOffer} = this.props;

    const offersCount = currentOffers.length;

    if (!selectedOffer) {
      return (
        <Main
          offerCount={offersCount}
          offers={currentOffers}
        />
      );
    }

    if (selectedOffer) {
      return (
        <OfferDetails
          offers={currentOffers}
          id={selectedOffer}
        />
      );
    }

    return null;
  }

  render() {
    const {currentOffers} = this.props;
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
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  selectedOffer: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
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
  currentOffers: state.currentOffers,
  selectedOffer: state.selectedOffer
});

export {App};
export default connect(mapStateToProps, null)(App);
