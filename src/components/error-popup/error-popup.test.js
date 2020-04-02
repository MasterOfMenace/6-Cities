import React from 'react';
import renderer from 'react-test-renderer';
import ErrorPopup from './error-popup.jsx';

it(`Правильное отображение компонента ErrorPopup`, () => {
  const tree = renderer.create(
      <ErrorPopup onButtonClick={()=>{}}/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
