import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import history from '../../history.js';
import NameSpace from '../../reducer/name-space.js';
import Main from './main.jsx';
import {AuthorizationStatus} from '../../reducer/user/user.js';
import {offers as mockOffers, cities, userInfo as mockUserInfo} from '../../test-mocks/test-mocks.js';

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
    selectedOffer: null
  },
  [NameSpace.USER]: {
    authorizationStatus: AuthorizationStatus.AUTH,
    userInfo: mockUserInfo
  }
});

it(`Правильное отображение компонента Main`, () => {
  const tree = renderer.create(
      <Provider store={store}>
        <Router history={history}>
          <Main
            offers={mockOffers}
            city={city}
            cities={cities}
            cityChangeHandler={()=>{}}
            isAuth={true}
            authStatus={AuthorizationStatus.AUTH}
            userInfo={mockUserInfo}
            isPopupShow={false}/>
        </Router>
      </Provider>,
      {
        createNodeMock: () => document.createElement(`div`)
      })
      .toJSON();

  expect(tree).toMatchSnapshot();
});
