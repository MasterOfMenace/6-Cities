import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '../../reducer/name-space.js';
import OfferDetails from './offer-details.jsx';

const mockStore = configureStore([]);

const Dates = [
  `10 July 2019 00:00:00Z`,
  `25 April 2018 00:00:00Z`
];

const city = {
  name: `City`,
  location: [52.38333, 4.9],
  zoom: 12
};

const mockOffers = [
  {
    id: 1,
    city: {
      name: `City`
    },
    title: `Offer1`,
    isFavorite: false,
    isPremium: true,
    previewImage: `img/apartment-01.jpg`,
    images: [`img/apartment-01.jpg`, `img/apartment-01.jpg`],
    description: `Description`,
    goods: [`good1`, `good2`],
    price: 100,
    rating: 4,
    type: `Private room`,
    maxAdults: 2,
    bedrooms: 1,
    location: [52.369553943508, 4.85309666406198],
    host: {
      avatarUrl: `avatar`,
      id: 1,
      isPro: true,
      name: `host-name`
    }
  },
  {
    id: 2,
    city: {
      name: `City`
    },
    title: `Offer2`,
    isFavorite: false,
    isPremium: true,
    previewImage: `img/apartment-01.jpg`,
    images: [`img/apartment-01.jpg`, `img/apartment-01.jpg`],
    description: `Description`,
    goods: [`good1`, `good2`],
    price: 200,
    rating: 4,
    type: `Apartment`,
    maxAdults: 2,
    bedrooms: 1,
    location: [52.369553943508, 4.85309666406198],
    host: {
      avatarUrl: `avatar`,
      id: 1,
      isPro: true,
      name: `host-name`
    }
  },
  {
    id: 3,
    city: {
      name: `City`,
      location: [52.38333, 4.9]
    },
    title: `Offer3`,
    isFavorite: false,
    isPremium: true,
    previewImage: `img/apartment-01.jpg`,
    images: [`img/apartment-01.jpg`, `img/apartment-01.jpg`],
    description: `Description`,
    goods: [`good1`, `good2`],
    price: 300,
    rating: 4,
    type: `Hostel`,
    maxAdults: 2,
    bedrooms: 1,
    location: [52.369553943508, 4.85309666406198],
    host: {
      avatarUrl: `avatar`,
      id: 1,
      isPro: true,
      name: `host-name`
    }
  },
  {
    id: 4,
    city: {
      name: `City`,
      location: [52.38333, 4.9]
    },
    title: `Offer4`,
    isFavorite: false,
    isPremium: true,
    previewImage: `img/apartment-01.jpg`,
    images: [`img/apartment-01.jpg`, `img/apartment-01.jpg`],
    description: `Description`,
    goods: [`good1`, `good2`],
    price: 400,
    rating: 4,
    type: `Apartment`,
    maxAdults: 2,
    bedrooms: 1,
    location: [52.369553943508, 4.85309666406198],
    host: {
      avatarUrl: `avatar`,
      id: 1,
      isPro: true,
      name: `host-name`
    }
  },
];

const mockNeighbors = [
  {
    id: 4,
    city: {
      name: `City`,
      location: [52.38333, 4.9]
    },
    name: `Offer4`,
    previewImage: `img/apartment-01.jpg`,
    images: [`img/apartment-01.jpg`, `img/apartment-01.jpg`],
    description: `Description`,
    goods: [`good1`, `good2`],
    price: 400,
    rating: 4,
    type: `Apartment`,
    maxAdults: 2,
    bedrooms: 1,
    location: [52.369553943508, 4.85309666406198],
    host: {
      avatarUrl: `avatar`,
      id: 1,
      isPro: true,
      name: `host-name`
    }
  }
];

const mockReviews = [
  {
    author: {
      avatar: `author-avatar`,
      id: 1,
      isPro: false,
      name: `author`
    },
    id: 1,
    rating: 3,
    text: `Review text`,
    date: new Date(Dates[0]).toISOString()
  },
  {
    author: {
      avatar: `author-avatar`,
      id: 1,
      isPro: false,
      name: `author`
    },
    id: 1,
    rating: 3,
    text: `Review text`,
    date: new Date(Dates[1]).toISOString()
  }
];

const mockUserInfo = {
  avatarUrl: `/img/1.png`,
  email: `Oliver.conner@gmail.com`,
  id: 1,
  isPro: false,
  name: `Oliver.conner`
};

const mockId = 1;

const store = mockStore({
  [NameSpace.APP]: {
    hoveredOffer: null,
    isPopupShow: false
  },
  [NameSpace.DATA]: {
    reviews: mockReviews,
    neighbors: mockNeighbors
  }
});

it(`Правильное отображение компонента OfferDetails`, () => {
  const tree = renderer.create(
      <Provider store={store}>
        <OfferDetails
          offers={mockOffers}
          id={mockId}
          city={city}
          isAuth={true}
          userInfo={mockUserInfo}/>
      </Provider>,
      {
        createNodeMock: () => document.createElement(`input`)
      })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
