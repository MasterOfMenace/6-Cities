import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

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
      placesName={Settings.PLACES_NAME}
    />,
    document.querySelector(`#root`)
);
