import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {SortTypes} from '../../const.js';
import {SortList} from './sort-list.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

it(`При выборе типа сортировки в коллбэк передается тип сортировки`, () => {
  const current = `Popular`;
  const onSortTypeClickHandler = jest.fn();

  const sortList = shallow(
      <SortList
        current={current}
        isOpen={true}
        openClickHandler={()=>{}}
        onSortTypeClickHandler={onSortTypeClickHandler}
      />
  );

  const thirdSortTypeSelectButton = sortList.find(`.places__option`).at(2);
  thirdSortTypeSelectButton.simulate(`click`);

  expect(onSortTypeClickHandler).toHaveBeenCalledTimes(1);
  expect(onSortTypeClickHandler.mock.calls[0][0]).toBe(SortTypes[2]);
});
