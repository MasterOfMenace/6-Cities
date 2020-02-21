import React from 'react';
import renderer from 'react-test-renderer';
import Review from './review.jsx';

const mockReview = {
  author: `author`,
  avatar: `author-avatar`,
  text: `Review text`,
  time: new Date().toISOString()
};

it(`Правильное отображение компонента Review`, () => {
  const tree = renderer
    .create(<Review
      review={mockReview}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
