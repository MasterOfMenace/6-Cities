import {baseURL} from "../const";

export const Adapter = {
  getOffer: (data) => {
    return {
      city: {
        name: data.city.name
      },
      id: data.id,
      title: data.title,
      isFavorite: data.is_favorite,
      isPremium: data.is_premium,
      previewImage: data.preview_image,
      images: data.images,
      description: data.description,
      goods: data.goods,
      price: data.price,
      rating: data.rating,
      type: data.type,
      maxAdults: data.max_adults,
      bedrooms: data.bedrooms,
      location: [data.location.latitude, data.location.longitude],
      host: {
        avatarUrl: data.host.avatar_url,
        id: data.host.id,
        isPro: data.host.is_pro,
        name: data.host.name,
      }
    };
  },

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
      isFavorite: offer.is_favorite,
      isPremium: offer.is_premium,
      previewImage: offer.preview_image,
      images: offer.images,
      description: offer.description,
      goods: offer.goods,
      price: offer.price,
      rating: offer.rating,
      type: offer.type,
      maxAdults: offer.max_adults,
      bedrooms: offer.bedrooms,
      location: [offer.location.latitude, offer.location.longitude],
      host: {
        avatarUrl: offer.host.avatar_url,
        id: offer.host.id,
        isPro: offer.host.is_pro,
        name: offer.host.name,
      }
    }));
  },

  getUserInfo: (data) => {
    return {
      avatarUrl: `${baseURL}${data.avatar_url}`,
      email: data.email,
      id: data.id,
      isPro: data.is_pro,
      name: data.name
    };
  },

  getReviews: (data) => {
    return data.map((review) => ({
      author: {
        avatar: review.user.avatar_url,
        id: review.user.id,
        isPro: review.user.is_pro,
        name: review.user.name
      },
      id: review.id,
      rating: review.rating,
      text: review.comment,
      date: review.date
    }));
  }
};
