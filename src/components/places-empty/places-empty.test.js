import React from 'react';
import renderer from 'react-test-renderer';
import PlacesEmpty from './places-empty.jsx';

const city = {
  name: `City`,
  location: [52.38333, 4.9]
};

it(`Правильное отображение компонента PlacesEmpty`, () => {
  const tree = renderer
    .create(<PlacesEmpty city={city}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
