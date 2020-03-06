import React from 'react';
import renderer from 'react-test-renderer';
import {Map} from './map.jsx';

const Dates = [
  `10 July 2019`,
  `25 April 2018`
];

const offers = [
  {
    id: 1,
    city: {
      name: `City`,
      location: [52.38333, 4.9]
    },
    name: `Offer1`,
    picture: `img/apartment-01.jpg`,
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
      location: [52.38333, 4.9]
    },
    name: `Offer2`,
    picture: `img/apartment-01.jpg`,
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
      location: [52.38333, 4.9]
    },
    name: `Offer3`,
    picture: `img/apartment-01.jpg`,
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
      location: [52.38333, 4.9]
    },
    name: `Offer4`,
    picture: `img/apartment-01.jpg`,
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

const offersLocations = [
  [52.369553943508, 4.85309666406198],
  [52.369553943508, 4.85309666406198],
  [52.369553943508, 4.85309666406198],
  [52.369553943508, 4.85309666406198]
];

const cityLocation = [52.38333, 4.9];

const currentOfferId = 1;

it(`Првильное отображение компонента Map`, () => {
  const tree = renderer
    .create(<Map
      offers={offers}
      cityLocation={cityLocation}
      offersLocations={offersLocations}
      currentOfferId={currentOfferId}/>,
    {
      createNodeMock: () => document.createElement(`div`)
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
