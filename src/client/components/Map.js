import React, {Component} from "react";
import axios from "axios";
import {
    Map,
    GoogleApiWrapper as googleApiWrapper,
    InfoWindow,
    Marker,
    Polyline,
} from "google-maps-react";
import gif from "../assets/gif/giphy.gif";
import distance from "../calculate_distance";
import terminalSpot from "../images/terminal-spot.png";
const images = require.context("../images/", true);
const imagePath = name => images(name, true);

let center = {lat: "", lng: ""},
    zoom = 15;

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

navigator.geolocation.watchPosition(success, error, options);

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false, // Hides or the shows the infoWindow
        activeMarker: {}, // Shows the active marker upon click
        selectedPlace: {}, // Shows the infoWindow to the selected place upon a marker
        terminals: [], // fetch all terminals
        loaded: false,
        clickedTerm: {lat: 0, lng: 0},
        distance: 0,
        bankTerminalsName: [],
    };

    componentDidMount() {
        let aroundCenter = {
            lat1: center.lat + 0.02,
            lng1: center.lng + 0.04,
            lat2: center.lat - 0.02,
            lng2: center.lng - 0.04,
        };
        
        axios
            .get(
                `/api/pos/${aroundCenter.lat1}/${aroundCenter.lat2}/${
                    aroundCenter.lng1
                }/${aroundCenter.lng2}`,
            )
            .then(res => {
                this.setState({
                    terminals: res.data.terminals,
                    loaded: true,
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true,
            clickedTerm: {
                lat: props.position.lat,
                lng: props.position.lng,
            },
        });
    };

    onClose = () => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null,
            });
        }
    };

    deleteATM = () => {
        console.log("deleted !");
    };


    render() {
        const mapStyles = {
            width: "95%",
            height: "75%",
            margin: "0 auto",
        };

        const renderMarkers = this.state.terminals.map(el => {
            try {
                console.log();
                return (
                    <Marker
                        key={el._id}
                        onClick={this.onMarkerClick}
                        name={`${el.bank.name} - ${
                            !el.address
                                ? `${"N/A se trouve à "}${distance(
                                      el.latitude,
                                      el.longitude,
                                      center.lat,
                                      center.lng,
                                      "k",
                                  ).toFixed(2)} km`
                                : `${el.address} se trouve à ${distance(
                                      el.latitude,
                                      el.longitude,
                                      center.lat,
                                      center.lng,
                                      "k",
                                  ).toFixed(2)} km`
                        }`}
                        title={el.address}
                        icon={`../images/${el.bank.icon}`}
                        position={{lat: el.latitude, lng: el.longitude}}
                    />
                );
            } catch (error) {
                console.log(error);
            }
        });

        return (
            <>
                {!this.state.loaded && (
                    <div>
                        <h3>{"Don't worry ! It's loading..."}</h3>
                        <img src={gif} alt="loading" />
                    </div>
                )}
                {this.state.loaded && (
                    <Map
                        google={this.props.google}
                        zoom={zoom}
                        style={mapStyles}
                        initialCenter={center}>
                        {this.state.clickedTerm.lat !== 0 &&
                        this.state.showingInfoWindow ? (
                            <Polyline
                                path={[
                                    {lat: center.lat, lng: center.lng},
                                    {
                                        lat: this.state.clickedTerm.lat,
                                        lng: this.state.clickedTerm.lng,
                                    },
                                ]}
                                strokeColor="#EB6123"
                                strokeOpacity={0.8}
                                strokeWeight={3}
                            />
                        ) : (
                            ""
                        )}

                        <Marker
                            onClick={this.onMarkerClick}
                            name={"You're here"}
                        />
                        {renderMarkers}
                        <InfoWindow
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}
                            onClose={this.onClose}>
                            <div>
                                <h4>{this.state.selectedPlace.name}</h4>
                                <button onClick={this.deleteATM}>
                                    delete
                                </button>
                            </div>
                        </InfoWindow>
                    </Map>
                )}
            </>
        );
    }
}

export default googleApiWrapper({
    apiKey: "AIzaSyDkmRb41NI7USOlvwkK6KrPA7UF5zpboW8",
})(MapContainer);
