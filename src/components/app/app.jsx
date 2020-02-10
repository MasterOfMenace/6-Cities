import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const titleClickHandler = () => {};

const App = (props) => {
  const {offerCount, placesName} = props;
  return (
    <Main
      offerCount={offerCount}
      placesName={placesName}
      titleClickHandler={titleClickHandler}/>
  );
};

App.propTypes = {
  offerCount: PropTypes.number.isRequired,
  placesName: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;
