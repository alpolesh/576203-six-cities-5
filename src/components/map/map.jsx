import React, {PureComponent} from "react";
import Proptypes from "prop-types";
import 'leaflet/dist/leaflet.css';
import leaflet from "leaflet";

class Map extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const city = [52.38333, 4.9];
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    const zoom = 12;
    this.map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    this.map.setView(city, zoom);
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);
    this.markers = [];
    const offerCords = this.props.offers.map((offer) => offer.coordinates);
    offerCords.forEach((offer) => {
      this.markers.push(leaflet
       .marker(offer, {icon})
       .addTo(this.map));
    });
  }

  componentDidUpdate() {
    this.markers.map((marker) => this.map.removeLayer(marker));
    this.map.removeLayer(this.markers.pop());
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    const offerCords = this.props.offers.map((offer) => offer.coordinates);
    offerCords.forEach((offer) => {
      this.markers.push(leaflet
       .marker(offer, {icon})
       .addTo(this.map));
    });
  }

  render() {
    return (
      <div id="map" style={{height: 100 + `%`}}></div>
    );
  }
}

Map.propTypes = {
  offers: Proptypes.arrayOf(Proptypes.object).isRequired,
};

export default Map;
