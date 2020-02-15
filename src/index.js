import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import offers from './mocks/offers.js';

const Settings = {
  OFFER_COUNT: 1500,
  PLACES_NAME: [
    `Beautiful & luxurious apartment at great location`,
    `Wood and stone place`,
    `Canal View Prinsengracht`,
    `Nice, cozy, warm big bed apartment`,
    `SandalWood and RollingStone place`
  ],
};

ReactDOM.render(
    <App
      offerCount={Settings.OFFER_COUNT}
      offers={offers}
    />,
    document.querySelector(`#root`)
);
