const Country = require('../models/country');
const { response } = require('express');

const getCountryInfo = async (req, res = response) => {
    const { country } = req.params;

    console.log(`Received country parameter: ${country}`);

    if (!country) {
        return res.status(400).json({
            ok: false,
            msg: "No country provided in the request"
        });
    }

    try {
        const countryInfo = await Country.find({ commonName: country });

        console.log(`Query executed: ${country}`);
        console.log(`Country info found: ${JSON.stringify(countryInfo)}`);

        if (countryInfo.length === 0) {
            return res.status(404).json({
                ok: false,
                msg: `No information found for country: ${country}`
            });
        }

        return res.json({
            ok: true,
            countries: countryInfo
        });

    } catch (error) {
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
