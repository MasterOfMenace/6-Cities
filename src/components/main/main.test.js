import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

it(`Правильное отображение компонента Main`, () => {
  const tree = renderer
    .create(<Main
      offerCount={1500}
      placesName={[
        `Beautiful & luxurious apartment at great location`,
        `Wood and stone place`,
        `Canal View Prinsengracht`,
        `Nice, cozy, warm big bed apartment`,
        `SandalWood and RollingStone place`
      ]}
      titleClickHandler={()=>{}}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
