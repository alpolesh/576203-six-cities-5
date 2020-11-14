import React, {PureComponent} from "react";
import Proptypes from "prop-types";
import 'leaflet/dist/leaflet.css';
import leaflet from "leaflet";

class Map extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const city = [this.props.offers[0].city.location.latitude, this.props.offers[0].city.location.longitude];
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    const zoom = this.props.offers[0].city.location.zoom;
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
    // console.log(this.map);
    this.markers = [];
    const offersCords = [];
    let offerCords = [];
    this.props.offers.forEach((offer) => {
      offerCords.push(offer.location.latitude);
      offerCords.push(offer.location.longitude);
      offersCords.push(offerCords);
      offerCords = [];
    });
    offersCords.forEach((offer) => {
      this.markers.push(leaflet
       .marker(offer, {icon})
       .addTo(this.map));
    });

  }

  componentDidUpdate() {
    this.map.options.center = [this.props.offers[0].city.location.latitude, this.props.offers[0].city.location.longitude];
    this.map.setView(this.map.options.center, this.props.offers[0].city.location.zoom);
    // console.log([this.props.offers[0].city.location.latitude, this.props.offers[0].city.location.longitude]);
    this.markers.map((marker) => this.map.removeLayer(marker));
    this.map.removeLayer(this.markers.pop());
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    const offersCords = [];
    let offerCords = [];
    this.props.offers.forEach((offer) => {
      offerCords.push(offer.location.latitude);
      offerCords.push(offer.location.longitude);
      offersCords.push(offerCords);
      offerCords = [];
    });
    offersCords.forEach((offer) => {
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
