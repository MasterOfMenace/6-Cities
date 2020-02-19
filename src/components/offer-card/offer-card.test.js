import React from 'react';
import renderer from 'react-test-renderer';
import OfferCard from './offer-card.jsx';

const mockOffer = {
  id: 1,
  name: `Room in hotel`,
  picture: `img/apartment-01.jpg`,
  price: 100,
  type: `Private room`,
  location: [52.369553943508, 4.85309666406198]
};

it(`Правильное отображение компонента OfferCard`, () => {
  const tree = renderer
    .create(<OfferCard
      offer={mockOffer}
      onMouseOver={()=>{}}
      onMouseLeave={()=>{}}
      titleClickHandler={()=>{}}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
