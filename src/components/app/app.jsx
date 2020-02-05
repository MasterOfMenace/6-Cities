import React from 'react';
import Main from '../main/main.jsx';

const App = (props) => {
  const {offerCount} = props; // eslint-disable-line react/prop-types
  return (
    <Main offerCount={offerCount}/>
  );
};

export default App;
