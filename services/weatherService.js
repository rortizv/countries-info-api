const axios = require('axios');

const getWeatherByCity = async (city) => {
    if (!city) {
        throw new Error('City name is required to fetch weather data.');
    }

    const url = `${process.env.OPENWEATHER_BASE_URL}&q=${city}`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(`Error fetching weather for city: ${city}.`, error.message);
        throw new Error(`Unable to fetch weather for city: ${city}`);
    }
};

module.exports = {
    getWeatherByCity
};
