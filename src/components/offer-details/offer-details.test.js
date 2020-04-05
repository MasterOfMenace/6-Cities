import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import history from '../../history.js';
import configureStore from 'redux-mock-store';
import {offers as mockOffers, cities, neighbors as mockNeighbors, reviews as mockReviews, userInfo as mockUserInfo} from '../../test-mocks/test-mocks.js';
import NameSpace from '../../reducer/name-space.js';
import OfferDetails from './offer-details.jsx';
import {AuthorizationStatus} from '../../reducer/user/user.js';

const mockStore = configureStore([]);

const city = cities[0];

const mockId = 1;

const match = {
  params: {
    id: mockId
  }
};


const store = mockStore({
  [NameSpace.APP]: {
    city,
    hoveredOffer: null,
    isPopupShow: false
  },
  [NameSpace.DATA]: {
    offers: mockOffers,
    reviews: mockReviews,
    neighbors: mockNeighbors
  },
  [NameSpace.USER]: {
    authorizationStatus: AuthorizationStatus.AUTH,
    userInfo: mockUserInfo
  }
});

it(`Правильное отображение компонента OfferDetails`, () => {
  const tree = renderer.create(
      <Provider store={store}>
        <Router history={history}>
          <OfferDetails
            offers={mockOffers}
            match={match}
            city={city}
            isAuth={true}
            userInfo={mockUserInfo}
            authorizationStatus={AuthorizationStatus.AUTH}
            neighbors={mockNeighbors}
            reviews={mockReviews}
            onSubmit={()=>{}}
            isPopupShow={false}
            onPopupButtonClick={()=>{}}
            onFavoriteButtonClick={()=>{}}/>
        </Router>
      </Provider>,
      {
        createNodeMock: () => document.createElement(`input`)
      })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
