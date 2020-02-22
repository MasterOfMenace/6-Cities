import React from 'react';
import renderer from 'react-test-renderer';
import OfferCard from './offer-card.jsx';
import {OfferRenderType} from '../../const.js';

const Dates = [
  `10 July 2019`,
  `25 April 2018`
];

const mockOffer = {
  id: 1,
  name: `Room in hotel`,
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
};

it(`Правильное отображение компонента OfferCard с OfferRenderType.MAIN`, () => {
  const tree = renderer
    .create(<OfferCard
      type={OfferRenderType.MAIN}
      offer={mockOffer}
      onMouseOver={()=>{}}
      onMouseLeave={()=>{}}
      titleClickHandler={()=>{}}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Правильное отображение компонента OfferCard с OfferRenderType.NEIGHBORHOOD`, () => {
  const tree = renderer
    .create(<OfferCard
      type={OfferRenderType.NEIGHBORHOOD}
      offer={mockOffer}
      onMouseOver={()=>{}}
      onMouseLeave={()=>{}}
      titleClickHandler={()=>{}}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
