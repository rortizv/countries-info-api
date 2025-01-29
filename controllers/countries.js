const { response } = require('express');
const { dbConnection } = require('../database/config');

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

        // Connect to the database (this will reuse the existing connection)
        const db = await dbConnection();
        const coll = db.collection('countries');  // Get the 'countries' collection
        const result = await coll.find(filter).toArray();  // Query the collection

        // Check if no results found
        if (result.length === 0) {
            return res.status(404).json({
                ok: false,
                msg: `No information found for country: ${country}`
            });
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
