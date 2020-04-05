import React from 'react';
import renderer from 'react-test-renderer';
import PlacesEmpty from './places-empty.jsx';
import {cities} from '../../test-mocks/test-mocks.js';

const city = cities[0];

it(`Правильное отображение компонента PlacesEmpty`, () => {
  const tree = renderer
    .create(<PlacesEmpty city={city}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
