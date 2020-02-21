import React from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';

const CITY_COORDS = [52.38333, 4.9];

class Map extends React.PureComponent {
  constructor(props) {
    super(props);

    this._mapContainer = React.createRef();
  }

  componentDidMount() {
    const {offersLocations} = this.props;
    const {currentOfferLocation} = this.props;

    const zoom = 12;

    this._map = leaflet.map(this._mapContainer.current, {
      center: CITY_COORDS,
      zoom,
      zoomControl: false,
      marker: true
    });
    this._map.setView(CITY_COORDS, zoom);

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(this._map);

    this._addOffersIcons(offersLocations);
    this._addCurrentOfferIcon(currentOfferLocation);
  }

  componentWillUnmount() {
    this._map.remove();
  }

  _addCurrentOfferIcon(location) {
    if (!location) {
      return;
    }
    const icon = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [30, 30]
    });

    leaflet.marker(location, {icon}).addTo(this._map);
  }

  _addOffersIcons(locations) {
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    locations.forEach((location) => {
      leaflet.marker(location, {icon}).addTo(this._map);
    });
  }

  render() {
    return (
      <div id="map" style={{height: `100%`}} ref={this._mapContainer}></div>
    );
  }
}

Map.propTypes = {
  offersLocations: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  currentOfferLocation: PropTypes.arrayOf(PropTypes.number)
};

export default Map;
