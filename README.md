# Countries Info API

This is a simple and free public REST API built with Node.js and Express that provides country-related information. The API allows users to retrieve information about a country by simply passing its name (or part of it) as a parameter in the URL.  Also allows to get the countries data searching by continent.

The data is stored in MongoDB.  The connection and data retrieving is done using the MongoDB driver for NodeJS.

The MongoDB has the data of all countries around the world 🌎.


## API Endpoint

### Get Countries info by country name

- **URL**: `/api/country-info/country/:country`
- **Method**: `GET`
- **URL Parameters**: 
  - `country`: The name of the country you're looking for (can be partial).
  
### Get Countries info by continent

- **URL**: `/api/country-info/continent/:continent`
- **Method**: `GET`
- **URL Parameters**: 
  - `continent`: The name of the continent you're looking for (can be partial).


## Features

- No authentication is required to use this API.
- Users can get information about countries by passing the country name (or partial name) as a parameter.
- This API is completely free to use and is publicly accessible.

## Production URL

You can access the API at the following URL:
`https://countries-info-api-1.onrender.com/api/country-info/country/<country_param>`
`https://countries-info-api-1.onrender.com/api/country-info/continent/<continent_param>`


## Usage

To use this API, simply send a GET request to the above URL with a country name (or partial name) as a parameter. The API will return country data, including information like population, region, and more.

### Example:

GET `https://countries-info-api-1.onrender.com/api/country-info/country/guay`
This request retrieves information about Uruguay and Paraguay


GET `https://countries-info-api-1.onrender.com/api/country-info/country/brazil`
This request retrieves information about Brazil


By CONTINENT

GET `https://countries-info-api-1.onrender.com/api/country-info/continent/north`
This request retrieves information about all countries in North America


GET `https://countries-info-api-1.onrender.com/api/country-info/continent/south`
This request retrieves information about all countries in South America


This is the list of all continents: `asia, africa, europe, oceania, north america, south america`

Try searching for others and check out the response.

## No Authentication Required

This API does not require any form of authentication. Simply make your request and get the data in response!

## License

This API is free to use. Feel free to integrate it into your projects or experiment with it. 

---



Feel free to contribute or contact me if you have any questions or suggestions!
