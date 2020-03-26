export const Adapter = {
  getCities: (data) => {
    const allCities = data.map((offer) => offer.city);

    const citiesNames = Array.from(
        new Set(data.map((offer) => offer.city.name))
    );
    const cities = citiesNames.map((city) => allCities.find((it) => city === it.name)).map((city) => {
      return {
        name: city.name,
        location: [city.location.latitude, city.location.longitude],
        zoom: city.location.zoom
      };
    });
    return cities;
  }
};
