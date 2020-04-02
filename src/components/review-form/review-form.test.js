import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {ReviewForm} from './review-form.jsx';
import renderer from 'react-test-renderer';

Enzyme.configure({
  adapter: new Adapter()
});

it(`Правильное отображение компонента ReviewForm`, () => {
  const tree = renderer.create(
      <ReviewForm
        id={1}
        onSubmit={()=>{}}
        formIsSending={false}
      />,
      {
        createNodeMock: () => document.createElement(`input`)
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
