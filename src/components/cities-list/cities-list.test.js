import React from 'react';
import renderer from 'react-test-renderer';
import CitiesList from './cities-list.jsx';

const MockCities = [
  `City1`,
  `City2`,
  `City3`
];

const currentCity = {
  name: `City1`,
  location: [52.38333, 4.9]
};

it(`Правильное отображение компонента CitiesList`, () => {
  const tree = renderer
    .create(
        <CitiesList
          cities={MockCities}
          currentCity={currentCity}
          cityChangeHandler={()=>{}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
