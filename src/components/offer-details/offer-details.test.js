import React from 'react';
import renderer from 'react-test-renderer';
import OfferDetails from './offer-details.jsx';

const offer = {
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
};

it(`Правильное отображение компонента OfferDetails`, () => {
  const tree = renderer
    .create(<OfferDetails offer={offer}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
