import {sin, cos, sqrt, atan2} from "mathjs";

const degrees_to_radians = degrees => {
    const pi = Math.PI;

    return degrees * (pi / 180);
};

// Retourne la distance en metre ou kilometre (si unit = 'k') entre deux latitude et longitude fournit

const distance = (lat1, long1, lat2, long2, unit = "k") => {
    const earthRadius = 6378137; // Terre = sphère de 6378km de rayon
    const radiusLat1 = degrees_to_radians(lat1);
    const radiusLong1 = degrees_to_radians(long1);
    const radiusLat2 = degrees_to_radians(lat2);
    const radiusLong2 = degrees_to_radians(long2);
    const distLong = (radiusLong2 - radiusLong1) / 2;
    const distLat = (radiusLat2 - radiusLat1) / 2;
    const angle =
        sin(distLat) * sin(distLat) +
        cos(radiusLat1) * cos(radiusLat2) * (sin(distLong) * sin(distLong));
    const diffDistance = 2 * atan2(sqrt(angle), sqrt(1 - angle));
    //
    const meter = earthRadius * diffDistance;

    if (unit === "k") {
        return meter / 1000;
    }
    return meter;
};

const calcul = distance(50.632903, 5.585911, 50.635207, 5.587967, "m");

console.log(calcul);
