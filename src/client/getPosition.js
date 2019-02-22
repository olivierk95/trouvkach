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

const error = err => {
    console.warn(`ERREUR (${err.code}): ${err.message}`);
};

navigator.geolocation.getCurrentPosition(success, error, options);

exports.success = success;
