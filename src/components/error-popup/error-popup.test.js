import React from 'react';
import renderer from 'react-test-renderer';
import ErrorPopup from './error-popup.jsx';

const mockMessage = `Message`;

it(`Правильное отображение компонента ErrorPopup`, () => {
  const tree = renderer.create(
      <ErrorPopup message={mockMessage} onButtonClick={()=>{}}/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
