import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CitiesList from './cities-list.jsx';
import {cities as mockCities} from '../../test-mocks/test-mocks.js';


Enzyme.configure({
  adapter: new Adapter()
});

const currentCity = mockCities[0];

it(`При клике на город вызывается колбэк и в него передается название города`, () => {
  const cityChangeHandler = jest.fn();

  const citiesList = shallow(
      <CitiesList
        cities={mockCities}
        currentCity={currentCity}
        cityChangeHandler={cityChangeHandler}
      />
  );

  const secondCity = citiesList.find(`.locations__item-link`).at(2);
  secondCity.simulate(`click`);
  expect(cityChangeHandler).toHaveBeenCalledTimes(1);
  expect(cityChangeHandler.mock.calls[0][0]).toBe(mockCities[2]);

});
