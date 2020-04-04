import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import history from '../../history.js';
import NameSpace from '../../reducer/name-space.js';
import Main from './main.jsx';
import {AuthorizationStatus} from '../../reducer/user/user.js';

const Dates = [
  `10 July 2019`,
  `25 April 2018`
];

const offers = [
  {
    id: 1,
    city: {
      name: `City`,
    },
    title: `Offer1`,
    previewImage: `img/apartment-01.jpg`,
    price: 100,
    type: `Private room`,
    location: [52.369553943508, 4.85309666406198],
    reviews: [
      {
        author: `author-1`,
        avatar: `author-avatar-1`,
        text: `Review text`,
        time: new Date(Dates[0]).toISOString()
      },
      {
        author: `author-2`,
        avatar: `author-avatar-2`,
        text: `Review text`,
        time: new Date(Dates[1]).toISOString()
      }
    ]
  },
  {
    id: 2,
    city: {
      name: `City`,
    },
    title: `Offer2`,
    previewImage: `img/apartment-01.jpg`,
    price: 200,
    type: `Apartment`,
    location: [52.369553943508, 4.85309666406198],
    reviews: [
      {
        author: `author-1`,
        avatar: `author-avatar-1`,
        text: `Review text`,
        time: new Date(Dates[0]).toISOString()
      },
      {
        author: `author-2`,
        avatar: `author-avatar-2`,
        text: `Review text`,
        time: new Date(Dates[1]).toISOString()
      }
    ]
  },
  {
    id: 3,
    city: {
      name: `City`,
    },
    title: `Offer3`,
    previewImage: `img/apartment-01.jpg`,
    price: 300,
    type: `Hostel`,
    location: [52.369553943508, 4.85309666406198],
    reviews: [
      {
        author: `author-1`,
        avatar: `author-avatar-1`,
        text: `Review text`,
        time: new Date(Dates[0]).toISOString()
      },
      {
        author: `author-2`,
        avatar: `author-avatar-2`,
        text: `Review text`,
        time: new Date(Dates[1]).toISOString()
      }
    ]
  },
  {
    id: 4,
    city: {
      name: `City`,
    },
    title: `Offer4`,
    previewImage: `img/apartment-01.jpg`,
    price: 400,
    type: `Apartment`,
    location: [52.369553943508, 4.85309666406198],
    reviews: [
      {
        author: `author-1`,
        avatar: `author-avatar-1`,
        text: `Review text`,
        time: new Date(Dates[0]).toISOString()
      },
      {
        author: `author-2`,
        avatar: `author-avatar-2`,
        text: `Review text`,
        time: new Date(Dates[1]).toISOString()
      }
    ]
  },
];

const cities = [
  {
    name: `City`,
    location: [52.38333, 4.9],
    zoom: 12
  },
  {
    name: `City1`,
    location: [52.38333, 4.9],
    zoom: 12
  },
  {
    name: `City3`,
    location: [52.38333, 4.9],
    zoom: 12
  }
];

const city = {
  name: `City`,
  location: [52.38333, 4.9],
  zoom: 12
};

const mockUserInfo = {
  avatarUrl: `/img/1.png`,
  email: `Oliver.conner@gmail.com`,
  id: 1,
  isPro: false,
  name: `Oliver.conner`
};

const mockStore = configureStore([]);

const store = mockStore({
  [NameSpace.DATA]: {
    offers,
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
            offers={offers}
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
