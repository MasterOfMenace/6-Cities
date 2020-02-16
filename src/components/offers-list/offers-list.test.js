import React from 'react';
import renderer from 'react-test-renderer';
import OffersList from './offers-list';

const mockOffers = [
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

it(`Правильное отображение компонента OffersList`, () => {
  const tree = renderer
    .create(<OffersList
      offers={mockOffers}
      titleClickHandler={()=>{}}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
