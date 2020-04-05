import React from 'react';
import PropTypes from 'prop-types';
import Review from '../review/review.jsx';
import {sortReviews} from '../../utils.js';

const MAX_REVIEWS_COUNT = 10;

const ReviewsList = (props) => {
  const {reviews} = props;
  const sorted = sortReviews(reviews).slice(0, MAX_REVIEWS_COUNT);

  return (
    <ul className="reviews__list">
      {sorted.map((review, index) => (
        <Review key={index} review={review} />
      ))}
    </ul>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired
};

export default ReviewsList;
