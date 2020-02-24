import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/app/app.jsx';
// import offers from './mocks/offers.js';
import {reducer} from './reducer.js';

const store = createStore(reducer);

// const Settings = {
//   OFFER_COUNT: 1500,
// };

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
