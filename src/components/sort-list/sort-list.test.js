import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import SortList from './sort-list.jsx';
import NameSpace from '../../reducer/name-space.js';

const mockStore = configureStore([]);

it(`Корректное отображение компонента SortList`, () => {
  const store = mockStore({
    [NameSpace.APP]: {
      currentSortType: `Popular`
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <SortList
            isOpen={false}
            openClickHandler={()=>{}}/>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
