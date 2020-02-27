import React from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';

class Map extends React.PureComponent {
  constructor(props) {
    super(props);

    this._markers = [];
    this._mapContainer = React.createRef();
  }

  componentDidMount() {
    const {offersLocations, cityLocation} = this.props;
    const {currentOfferLocation} = this.props;
    const zoom = 12;

    this._createMap(cityLocation, offersLocations, zoom);

    this._addOffersIcons(offersLocations);
    this._addCurrentOfferIcon(currentOfferLocation);
  }

  componentWillUnmount() {
    this._map.remove();
    this._removeMarkers();
  }

  _createMap(cityLocation, offersLocations, zoom) {
    this._map = leaflet.map(this._mapContainer.current, {
      center: cityLocation,
      zoom,
      zoomControl: false,
      marker: true
    });
    this._map.setView(cityLocation, zoom);

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(this._map);
  }

  _removeMarkers() {
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

  componentDidUpdate(prevProps) {
    if (this.props.currentOfferLocation !== prevProps.currentOfferLocation) {
      const {offersLocations, currentOfferLocation} = this.props;
      this._removeMarkers();
      this._addOffersIcons(offersLocations);
      this._addCurrentOfferIcon(currentOfferLocation);
    }

    if (this.props.cityLocation !== prevProps.cityLocation) {
      const {offersLocations, cityLocation} = this.props;
      const zoom = 12;
      this._removeMarkers();
      this._map.remove();
      this._createMap(cityLocation, offersLocations, zoom);
      this._addOffersIcons(offersLocations);
    }
  }
}

Map.propTypes = {
  cityLocation: PropTypes.array.isRequired,
  offersLocations: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  currentOfferLocation: PropTypes.arrayOf(PropTypes.number)
};

export default Map;
