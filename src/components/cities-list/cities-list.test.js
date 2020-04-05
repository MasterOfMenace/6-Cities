import React from 'react';
import renderer from 'react-test-renderer';
import CitiesList from './cities-list.jsx';
import {cities as mockCities} from '../../test-mocks/test-mocks.js';

const currentCity = mockCities[0];

it(`Правильное отображение компонента CitiesList`, () => {
  const tree = renderer
    .create(
        <CitiesList
          cities={mockCities}
          currentCity={currentCity}
          cityChangeHandler={()=>{}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
