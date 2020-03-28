import React from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getHoveredOffer} from '../../reducer/app/selectors.js';

class Map extends React.PureComponent {
  constructor(props) {
    super(props);

    this._markers = [];
    this._mapContainer = React.createRef();
  }

  componentDidMount() {
    const {offers, offersLocations, city} = this.props;
    const {currentOfferId} = this.props;
    const centerCoords = city.location;
    const zoom = city.zoom;

    this._createMap(centerCoords, offersLocations, zoom);

    this._addOffersIcons(offersLocations);

    if (currentOfferId) {
      const currentOffer = offers.find((offer) => offer.id === currentOfferId);
      const currentLocation = [currentOffer.location.latitude, currentOffer.location.longitude];
      this._addCurrentOfferIcon(currentLocation);
    }
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
    if (this.props.city !== prevProps.city) {
      const {offersLocations, city} = this.props;
      // const zoom = 12;
      const centerCoords = city.location;
      const zoom = city.zoom;
      this._removeMarkers();
      this._map.remove();
      this._createMap(centerCoords, offersLocations, zoom);
      this._addOffersIcons(offersLocations);
    }

    if (this.props.currentOfferId !== prevProps.currentOfferId) {
      const {offersLocations, currentOfferId, offers} = this.props;
      this._removeMarkers();
      this._addOffersIcons(offersLocations);
      if (currentOfferId) {
        const currentOffer = offers.find((offer) => offer.id === currentOfferId);
        // const currentLocation = currentOffer.location;
        const currentLocation = [currentOffer.location.latitude, currentOffer.location.longitude];
        this._addCurrentOfferIcon(currentLocation);
      }
    }
  }
}

Map.propTypes = {
  currentOfferId: PropTypes.number,
  offers: PropTypes.array.isRequired,
  city: PropTypes.object,
  offersLocations: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  currentOfferLocation: PropTypes.arrayOf(PropTypes.number)
};

const mapStateToProps = (state) => ({
  currentOfferId: getHoveredOffer(state)
});

export {Map};
export default connect(mapStateToProps, null)(Map);
