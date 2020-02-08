import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const App = (props) => {
  const {offerCount, placesName} = props;
  return (
    <Main
      offerCount={offerCount}
      placesName={placesName}/>
  );
};

App.propTypes = {
  offerCount: PropTypes.number.isRequired,
  placesName: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;
