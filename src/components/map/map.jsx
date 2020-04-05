import React from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';

class Map extends React.PureComponent {
  constructor(props) {
    super(props);

    this._map = null;
    this._markers = [];
    this._mapContainer = React.createRef();
  }

  componentDidMount() {
    const {offers, offersLocations, city, currentOfferId} = this.props;
    const centerCoords = city.location;
    const zoom = city.zoom;

    this._initializeMap(centerCoords, offersLocations, zoom);

    if (currentOfferId) {
      const currentOffer = offers.find((offer) => offer.id === currentOfferId);
      const currentLocation = currentOffer.location;
      this._addCurrentOfferIcon(currentLocation);
    }
  }

  componentDidUpdate() {
    const {offers, offersLocations, city, currentOfferId} = this.props;
    const centerCoords = city.location;
    const zoom = city.zoom;

    this._removeMarkers();
    this._setView(centerCoords, zoom);
    this._addOffersIcons(offersLocations);

    if (currentOfferId) {
      const currentOffer = offers.find((offer) => offer.id === currentOfferId);
      const currentLocation = currentOffer.location;
      this._addCurrentOfferIcon(currentLocation);
    }
  }

  componentWillUnmount() {
    this._map = null;
    this._markers = [];
  }

  _setView(location, zoom) {
    this._map.setView(location, zoom);
  }

  _initializeMap(cityLocation, offersLocations, zoom) {
    this._createMap(cityLocation, offersLocations, zoom);
    this._setView(cityLocation, zoom);
    this._addOffersIcons(offersLocations);
  }

  _createMap(cityLocation, offersLocations, zoom) {
    this._map = leaflet.map(this._mapContainer.current, {
      center: cityLocation,
      zoom,
      zoomControl: false,
      marker: true
    });

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(this._map);
  }

  _removeMarkers() {
    if (this._map) {
      this._markers.forEach((marker) => {
        this._map.removeLayer(marker);
      });
    }
    this._markers = [];
  }

  _addCurrentOfferIcon(location) {
    if (!location) {
      return;
    }
    const icon = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [30, 30]
    });

    this._markers.push(leaflet.marker(location, {icon}).addTo(this._map));
  }

  _addOffersIcons(locations) {
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    locations.forEach((location) => {
      this._markers
      .push(leaflet.marker(location, {icon}).addTo(this._map));
    });
  }

  render() {
    return (
      <div id="map" style={{height: `100%`}} ref={this._mapContainer}></div>
    );
  }
}

Map.propTypes = {
  currentOfferId: PropTypes.number,
  offers: PropTypes.arrayOf(PropTypes.shape({
    city: PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
    previewImage: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    goods: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    maxAdults: PropTypes.number.isRequired,
    bedrooms: PropTypes.number.isRequired,
    location: PropTypes.arrayOf(PropTypes.number.isRequired),
    host: PropTypes.shape({
      avatarUrl: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isPro: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  })),
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.arrayOf(PropTypes.number).isRequired,
    zoom: PropTypes.number.isRequired
  }),
  offersLocations: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired
};

export default Map;
