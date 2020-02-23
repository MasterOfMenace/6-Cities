import React from 'react';
import renderer from 'react-test-renderer';
import Map from './map.jsx';

const offersLocations = [
  [52.369553943508, 4.85309666406198],
  [52.369553943508, 4.85309666406198],
  [52.369553943508, 4.85309666406198],
  [52.369553943508, 4.85309666406198]
];

const currentOfferLocation = [52.369553943508, 4.85309666406198];

it(`Првильное отображение компонента Map`, () => {
  const tree = renderer
    .create(<Map
      offersLocations={offersLocations}
      currentOfferLocation={currentOfferLocation}/>,
    {
      createNodeMock: () => document.createElement(`div`)
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
