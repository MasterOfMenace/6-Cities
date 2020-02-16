import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const App = (props) => {
  const {offerCount, offers, titleClickHandler} = props;
  return (
    <Main
      offerCount={offerCount}
      offers={offers}
      titleClickHandler={titleClickHandler}/>
  );
};

App.propTypes = {
  offerCount: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
  titleClickHandler: PropTypes.func.isRequired
};

export default App;
