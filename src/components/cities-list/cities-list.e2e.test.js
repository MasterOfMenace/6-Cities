import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CitiesList from './cities-list.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

const MockCities = [
  `City1`,
  `City2`,
  `City3`
];

const currentCity = {
  name: `City1`,
  location: [52.38333, 4.9]
};

it(`При клике на город вызывается колбэк и в него передается название города`, () => {
  const cityChangeHandler = jest.fn();

  const citiesList = shallow(
      <CitiesList
        cities={MockCities}
        currentCity={currentCity}
        cityChangeHandler={cityChangeHandler}
      />
  );

  const secondCity = citiesList.find(`.locations__item-link`).at(2);
  secondCity.simulate(`click`);
  expect(cityChangeHandler).toHaveBeenCalledTimes(1);
  expect(cityChangeHandler.mock.calls[0][0]).toBe(MockCities[2]);

});
