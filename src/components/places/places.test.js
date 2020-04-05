import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import history from '../../history.js';
import Places from './places.jsx';
import NameSpace from '../../reducer/name-space.js';
import {cities, offers as mockOffers} from '../../reducer/test-mocks/offers.js';

const city = cities[0];

const mockStore = configureStore([]);

const store = mockStore({
  [NameSpace.DATA]: {
    offers: mockOffers,
    cities
  },
  [NameSpace.APP]: {
    city,
    currentSortType: `Popular`,
    hoveredOffer: null,
    selectedOffer: null
  }
});

it(`Правильное отображение компонента Places`, () => {
  const tree = renderer.create(
      <Provider store={store}>
        <Router history={history}>
          <Places
            offers={mockOffers}
            city={city}
            isAuth={true}
          />
        </Router>
      </Provider>, {
        createNodeMock: () => document.createElement(`div`)
      }
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
});
