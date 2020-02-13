import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

// const titleClickHandler = () => {};

const App = (props) => {
  const {offerCount, offers} = props;
  return (
    <Main
      offerCount={offerCount}
      offers={offers}/>
  );
};

App.propTypes = {
  offerCount: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired
};

export default App;
