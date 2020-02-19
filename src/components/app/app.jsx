import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Main from '../main/main.jsx';
import OfferDetails from '../offer-details/offer-details.jsx';

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      id: null
    };
    this.titleClickHandler = this.titleClickHandler.bind(this);
  }

  titleClickHandler(id) {
    this.setState({
      id
    });
  }

  _renderApp() {
    const {offerCount, offers} = this.props;
    const {id} = this.state;

    if (!id) {
      return (
        <Main
          offerCount={offerCount}
          offers={offers}
          titleClickHandler={this.titleClickHandler}
        />
      );
    }

    if (id) {
      const currentOffer = offers.find((offer) => offer.id === id);
      return (
        <OfferDetails
          offer={currentOffer}
        />
      );
    }

    return null;
  }

  render() {
    const {offers} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-details">
            <OfferDetails
              offer={offers[0]}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offerCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired
  })).isRequired
};

export default App;
