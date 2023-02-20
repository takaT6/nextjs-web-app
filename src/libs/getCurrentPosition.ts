export const getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition(success, error);
};

const success = (position: GeolocationPosition) => {
    console.log(position);
};

const error = () => {
    console.log();
};