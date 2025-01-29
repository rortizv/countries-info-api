const { Schema, model } = require('mongoose');

const CountrySchema = Schema({
    officialName: {
        type: String
    },
    commonName: {
        type: String
    },
    capitalCity: {
        type: String
    },
    population: {
        type: Number
    },
    isoCode: {
        type: String
    },
    continent: {
        type: String
    },
    officialLanguage: {
        type: String
    },
    officialCurrency: {
        type: String
    },
    phonePrefix: {
        type: String
    },
    timeZones: {
        type: [String]
    },
    totalSurfaceArea: {
        type: Number
    },
    geographicalCoordinates: {
        type: {
            latitude: {
                type: Number
            },
            longitude: {
                type: Number
            }
        }
    },
    landLimits: {
        type: [String]
    },
    maritimeLimits: {
        type: [String]
    },
    topography: {
        type: String
    },
    grossDomesticProduct: {
        type: Number
    },
    populationDensity: {
        type: Number
    },
    ethnicGroups: {
        type: [String]
    }
}, { collection: 'countries' });  // Explicitly specify collection name

module.exports = model('Country', CountrySchema);