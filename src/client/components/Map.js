import React, {Component} from "react";
import {Map, GoogleApiWrapper as googleApiWrapper} from "google-maps-react";

const mapStyles = {
    width: "100%",
    height: "100%",
};

let center = {lat: "", lng: ""},
    zoom = 19;

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
};

const error = err => {
    console.warn(`ERREUR (${err.code}): ${err.message}`);
};
const success = pos => {
    center = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
    };
};

navigator.geolocation.getCurrentPosition(success, error, options);

export class MapContainer extends Component {
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={zoom}
                style={mapStyles}
                initialCenter={center}
            />
        );
    }
}

export default googleApiWrapper({
    apiKey: "AIzaSyDalvpxv-7crRgGa3MNhZiWIClcM1urB2o",
})(MapContainer);
