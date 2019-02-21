import React, {Component} from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({text}) => <div>{text}</div>;

class SimpleMap extends Component {
    componentDidMount() {
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        };

        const success = pos => {
            const crd = pos.coords;

            console.log("Votre position actuelle est :");
            console.log(`Latitude : ${crd.latitude}`);
            console.log(`Longitude : ${crd.longitude}`);
            console.log(`La précision est de ${crd.accuracy} mètres.`);
        };

        function error(err) {
            console.warn(`ERREUR (${err.code}): ${err.message}`);
        }

        navigator.geolocation.getCurrentPosition(success, error, options);
    }

    static defaultProps = {
        center: {
            lat: crd.latitude,
            lng: crd.longitude,
        },
        zoom: 11,
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{height: "100vh", width: "100%"}}>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: "AIzaSyDalvpxv-7crRgGa3MNhZiWIClcM1urB2o",
                    }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}>
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text={"Kreyser Avrora"}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;
