import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const Settings = {
  OFFER_COUNT: 1500,
};

ReactDOM.render(
    <App
      offerCount={Settings.OFFER_COUNT}
    />,
    document.querySelector(`#root`)
);
