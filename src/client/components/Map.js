import React, {Component} from "react";
import {
    Map,
    GoogleApiWrapper as googleApiWrapper,
    InfoWindow,
    Marker,
} from "google-maps-react";
import axios from "axios";

let center = {lat: "", lng: ""},
    zoom = 18;

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
    state = {
        showingInfoWindow: false, // Hides or the shows the infoWindow
        activeMarker: {}, // Shows the active marker upon click
        selectedPlace: {}, // Shows the infoWindow to the selected place upon a marker
        terminals: [],
    };

    componentDidMount() {
        axios
            .get(`/api/terminals`)
            .then(res => {
                const terminals = res.data.terminals;

                this.setState({terminals});
            })
            .catch(err => {
                console.log(err);
            });
    }

    onMarkerClick = (props, marker) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true,
        });

    onClose = () => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null,
            });
        }
    };

    render() {
        const mapStyles = {
            width: "95%",
            height: "75%",
            margin: "0 auto",
        };

        const markerAllTerminals = Object.values(this.state.terminals).forEach(
            terminal => {
                console.log(terminal.address);
                return (
                    <div>
                        <Marker
                            key={terminal._id}
                            onClick={this.onMarkerClick}
                            name={terminal.address}
                            position={{
                                lat: terminal.latitude,
                                lng: terminal.longitude,
                            }}
                        />
                        <InfoWindow
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}
                            onClose={this.onClose}>
                            <div>
                                <h4>{this.state.selectedPlace.name}</h4>
                            </div>
                        </InfoWindow>
                    </div>
                );
            },
        );

        return (
            <Map
                google={this.props.google}
                zoom={zoom}
                style={mapStyles}
                initialCenter={center}>
                {markerAllTerminals}
            </Map>
        );
    }
}

export default googleApiWrapper({
    apiKey: "AIzaSyDalvpxv-7crRgGa3MNhZiWIClcM1urB2o",
})(MapContainer);
