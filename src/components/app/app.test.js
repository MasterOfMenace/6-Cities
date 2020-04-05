import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {App} from './app.jsx';
import NameSpace from '../../reducer/name-space.js';
import {AuthorizationStatus} from '../../reducer/user/user.js';
import {cities, offers as mockOffers, userInfo as mockUserInfo} from '../../reducer/test-mocks/offers.js';

const mockStore = configureStore([]);

const city = cities[0];

const store = mockStore({
  [NameSpace.DATA]: {
    offers: mockOffers,
    cities
  },
  [NameSpace.APP]: {
    city,
    currentSortType: `Popular`,
    hoveredOffer: null,
    isPopupShow: false
  },
  [NameSpace.USER]: {
    authorizationStatus: AuthorizationStatus.AUTH,
    userInfo: mockUserInfo
  }
});

it(`Правильное отображение компонента App`, () => {
  const tree = renderer.create(
      <Provider store={store}>
        <App
          city={city}
          cities={cities}
          offers={mockOffers}
          currentSortType={`Popular`}
          hoveredOffer={null}
          cityChangeHandler={()=>{}}
          authorizationStatus={AuthorizationStatus.AUTH}
          userInfo={mockUserInfo}
          login={()=>{}}
          isPopupShow={false}/>
      </Provider>,
      {
        createNodeMock: () => document.createElement(`div`)
      })
      .toJSON();

  expect(tree).toMatchSnapshot();
});
