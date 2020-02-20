import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const offers = [
  {
    id: 1,
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
        time: new Date()
      },
      {
        author: `author-2`,
        avatar: `author-avatar-2`,
        text: `Review text`,
        time: new Date()
      }
    ]
  },
  {
    id: 2,
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
        time: new Date()
      },
      {
        author: `author-2`,
        avatar: `author-avatar-2`,
        text: `Review text`,
        time: new Date()
      }
    ]
  },
  {
    id: 3,
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
        time: new Date()
      },
      {
        author: `author-2`,
        avatar: `author-avatar-2`,
        text: `Review text`,
        time: new Date()
      }
    ]
  },
  {
    id: 4,
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
        time: new Date()
      },
      {
        author: `author-2`,
        avatar: `author-avatar-2`,
        text: `Review text`,
        time: new Date()
      }
    ]
  },
];

it(`Правильное отображение компонента App`, () => {
  const tree = renderer
    .create(<App
      offerCount={1500}
      offers={offers}/>,
    {
      createNodeMock: () => document.createElement(`div`)
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
