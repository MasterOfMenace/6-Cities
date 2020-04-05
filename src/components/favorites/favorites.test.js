import React from 'react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import Favorites from './favorites.jsx';
import history from '../../history.js';
import {AuthorizationStatus} from '../../reducer/user/user.js';
import {offers as mockOffers, userInfo as mockUserInfo} from '../../test-mocks/test-mocks.js';
import NameSpace from '../../reducer/name-space.js';

const mockStore = configureStore([]);

describe(`Правильное отображение компонента Favorites`, () => {
  it(`Без избранных предложений`, () => {

    const store = mockStore({
      [NameSpace.DATA]: {
        favorites: [],
      },
      [NameSpace.USER]: {
        authorizationStatus: AuthorizationStatus.AUTH,
        userInfo: mockUserInfo
      }
    });

    const tree = renderer.create(
        <Provider store={store}>
          <Router history={history}>
            <Favorites
              authorizationStatus={AuthorizationStatus.AUTH}
              userInfo={mockUserInfo}
              favoriteOffers={[]}
              onMouseLeave={()=>{}}
              onMouseOver={()=>{}}
              onFavoriteButtonClick={()=>{}}
            />
          </Router>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`С избранными предложениями`, () => {

    const store = mockStore({
      [NameSpace.DATA]: {
        favorites: mockOffers,
      },
      [NameSpace.USER]: {
        authorizationStatus: AuthorizationStatus.AUTH,
        userInfo: mockUserInfo
      }
    });

    const tree = renderer.create(
        <Provider store={store}>
          <Router history={history}>
            <Favorites
              authorizationStatus={AuthorizationStatus.AUTH}
              userInfo={mockUserInfo}
              favoriteOffers={mockOffers}
              onMouseLeave={()=>{}}
              onMouseOver={()=>{}}
              onFavoriteButtonClick={()=>{}}
            />
          </Router>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
