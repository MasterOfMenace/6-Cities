import React from 'react';
import renderer from 'react-test-renderer';
import Map from './map.jsx';
import {offers as mockOffers, cities} from '../../test-mocks/test-mocks.js';

const city = cities[0];

const offersLocations = [
  [52.369553943508, 4.85309666406198],
  [52.369553943508, 4.85309666406198],
  [52.369553943508, 4.85309666406198],
  [52.369553943508, 4.85309666406198]
];

const currentOfferId = 1;

it(`Првильное отображение компонента Map`, () => {
  const tree = renderer
    .create(<Map
      offers={mockOffers}
      city={city}
      offersLocations={offersLocations}
      currentOfferId={currentOfferId}/>,
    {
      createNodeMock: () => document.createElement(`div`)
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
