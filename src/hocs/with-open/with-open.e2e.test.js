import React from 'react';
import PropTypes from 'prop-types';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withOpen from './with-open.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

const SortList = (props) => {
  const {openClickHandler} = props;
  return (
    <div>
      <button onClick={openClickHandler}/>
    </div>
  );
};

SortList.propTypes = {
  openClickHandler: PropTypes.func.isRequired
};

it(`Проверяет, что вызов колбэка ХОКа изменит стейт хока`, () => {
  const SortListWrapped = withOpen(SortList);

  const wrapper = Enzyme.mount(
      <SortListWrapped/>);

  wrapper.find(`button`).simulate(`click`);

  expect(wrapper.instance().state.isOpen).toBe(true);
});
