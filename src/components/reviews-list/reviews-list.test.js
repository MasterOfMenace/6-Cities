import React from 'react';
import renderer from 'react-test-renderer';
import ReviewsList from './reviews-list.jsx';

const Dates = [
  `10 July 2019`,
  `25 April 2018`
];

const mockReviews = [
  {
    author: {
      avatar: `author-avatar-1`,
      id: 1,
      isPro: false,
      name: `author-1`
    },
    id: 1,
    rating: 3,
    text: `Review text 1`,
    date: new Date(Dates[0]).toISOString()
  },
  {
    author: {
      avatar: `author-avatar-2`,
      id: 2,
      isPro: false,
      name: `author-2`
    },
    id: 2,
    rating: 5,
    text: `Review text 2`,
    date: new Date(Dates[1]).toISOString()
  }
];

it(`Правильное отображение компонента ReviewsList`, () => {
  const tree = renderer
    .create(<ReviewsList
      reviews={mockReviews}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
