import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const offers = [
  {
    name: `Offer1`,
    picture: `img/apartment-01.jpg`,
    price: 100,
    type: `Private room`
  },
  {
    name: `Offer2`,
    picture: `img/apartment-01.jpg`,
    price: 200,
    type: `Apartment`
  },
  {
    name: `Offer3`,
    picture: `img/apartment-01.jpg`,
    price: 300,
    type: `Hostel`
  },
  {
    name: `Offer4`,
    picture: `img/apartment-01.jpg`,
    price: 400,
    type: `Apartment`
  },
];

it(`Правильное отображение компонента App`, () => {
  const tree = renderer
    .create(<App
      offerCount={1500}
      offers={offers}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
