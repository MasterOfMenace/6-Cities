import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

it(`Правильное отображение компонента App`, () => {
  const tree = renderer
    .create(<App
      offerCount={1500}
      placesName={[
        `Beautiful & luxurious apartment at great location`,
        `Wood and stone place`,
        `Canal View Prinsengracht`,
        `Nice, cozy, warm big bed apartment`,
        `SandalWood and RollingStone place`
      ]}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
