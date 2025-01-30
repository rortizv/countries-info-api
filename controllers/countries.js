const { response } = require('express');
const { dbConnection } = require('../database/config');
const { getWeatherByCity } = require('../services/weatherService');

const getCountryInfo = async (req, res = response) => {
    const { country } = req.params;

    if (!country) {
        return res.status(400).json({
            ok: false,
            msg: "No country provided in the request"
        });
    }

    try {
        const filter = {
            'commonName': {
                '$regex': country,
                '$options': 'i'
            }
        };

        const db = await dbConnection(); // Connect to the database
        const countriesCollection = db.collection('countries'); // Get the 'countries' collection
        let result = await countriesCollection.find(filter).toArray(); // Query the collection

        // Check if no results found
        if (result.length === 0) {
            return res.status(404).json({
                ok: false,
                msg: `No information found for country: ${country}`
            });
        }

        // Fetch weather information for each country's capital city
        for (let country of result) {
            const capitalCity = country.capitalCity;

            if (capitalCity) {
                try {
                    // Use the weather service to fetch capitalCity's weather data
                    const weatherData = await getWeatherByCity(capitalCity);
                    country.capitalCity = {
                        name: capitalCity,
                        currentWeather: weatherData
                    };
                } catch (weatherError) {
                    console.error(`Error fetching weather for ${capitalCity}:`, weatherError.message);
                }
            } else {
                console.log(`No capital city found for country: ${country.commonName}`);
            }
        }

        return res.json({
            ok: true,
            countries: result
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Error querying the database',
            error: error.message
        });
    }
};

module.exports = {
    getCountryInfo,
};
