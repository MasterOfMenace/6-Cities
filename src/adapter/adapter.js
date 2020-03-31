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
  },

  getOffers: (data) => {
    return data.map((offer) => ({
      city: {
        name: offer.city.name
      },
      id: offer.id,
      title: offer.title,
      previewImage: offer.preview_image,
      price: offer.price,
      type: offer.type,
      location: [offer.location.latitude, offer.location.longitude],
    }));
  },

  getUserInfo: (data) => {
    return {
      avatarUrl: `https://htmlacademy-react-3.appspot.com/six-cities${data.avatar_url}`,
      email: data.email,
      id: data.id,
      isPro: data.is_pro,
      name: data.name
    };
  }
};


/* Структура данных от сервера
{
  "bedrooms": 3,
  "city": {
    "location": {
      "latitude": 52.370216,
      "longitude": 4.895168,
      "zoom": 10
    },
    "name": "Amsterdam"
  },
  "description": "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
  "goods": ["Heating", "Kitchen", "Cable TV", "Washing machine", "Coffee machine", "Dishwasher"],
  "host": {
    "avatar_url": "img/1.png",
    "id": 3,
    "is_pro": true,
    "name": "Angelina"
  },
  "id": 1,
  "images": ["img/1.png", "img/2.png"],
  "is_favorite": false,
  "is_premium": false,
  "location": {
    "latitude": 52.35514938496378,
    "longitude": 4.673877537499948,
    "zoom": 8
  },
  "max_adults": 4,
  "preview_image": "img/1.png",
  "price": 120,
  "rating": 4.8,
  "title": "Beautiful & luxurious studio at great location",
  "type": "apartment"
}
  AuthInfo
  {
  "avatar_url": "img/1.png",
  "email": "Oliver.conner@gmail.com",
  "id": 1,
  "is_pro": false,
  "name": "Oliver.conner"
}

    Моя структура данных
    id: 1,
    city: {
      name: `Amsterdam`,
      location: [52.38333, 4.9],
      zoom: 13
    }
    title: `Room in hotel`,
    previewImage: `img/apartment-01.jpg`,
    price: 100,
    type: `Private room`,
    location: [52.3909553943508, 4.85309666406198],
    reviews: {
      author: createAuthor(),
      avatar: `img/avatar-max.jpg`,
      text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      time: getRandomDate().toISOString()
    }

    AuthInfo
    {
    avatarUrl: "https://htmlacademy-react-3.appspot.com/six-cities/static/img/1.png",
    email: "Oliver.conner@gmail.com",
    id: 1,
    isPro: false,
    name: "Oliver.conner"
  }*/
