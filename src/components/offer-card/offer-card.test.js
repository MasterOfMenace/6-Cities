import React from 'react';
import renderer from 'react-test-renderer';
import OfferCard from './offer-card.jsx';
import {OfferRenderType} from '../../const.js';

const mockOffer = {
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
