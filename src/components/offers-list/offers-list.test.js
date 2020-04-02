import React from 'react';
import renderer from 'react-test-renderer';
import {OffersList} from './offers-list';
import {OfferRenderType} from '../../const.js';

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


it(`Правильное отображение компонента OffersList с OfferRenderType.MAIN`, () => {
  const tree = renderer
    .create(<OffersList
      type={OfferRenderType.MAIN}
      offers={mockOffers}
      onMouseOver={()=>{}}
      onMouseLeave={()=>{}}
      titleClickHandler={()=>{}}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Правильное отображение компонента OffersList с OfferRenderType.NEIGHBORHOOD`, () => {
  const tree = renderer
    .create(<OffersList
      type={OfferRenderType.NEIGHBORHOOD}
      offers={mockOffers}
      onMouseOver={()=>{}}
      onMouseLeave={()=>{}}
      titleClickHandler={()=>{}}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
