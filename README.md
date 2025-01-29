# Countries Info API

This is a simple and free public REST API built with Node.js and Express that provides country-related information. The API allows users to retrieve information about a country by simply passing its name (or part of it) as a parameter in the URL.

The data is stored in MongoDB.  The connection and data retrieving is done using the MongoDB driver for NodeJS.

So far, the database has the information about countries in South America.  Feel free to search information about Argentina, Brazil, Colombia, Venezuela, Peru, Bolivia, Uruguay, Guyana, Paraguay, Ecuador, Chile and Suriname.

## API Endpoint

### Get Country Info

- **URL**: `/api/country-info/:country`
- **Method**: `GET`
- **URL Parameters**: 
  - `country`: The name of the country you're looking for (can be partial).
  
### Example Requests

- **Request**: `GET https://countries-info-api-1.onrender.com/api/country-info/guay`
  - **Response**: Information about Uruguay and Paraguay.
  
- **Request**: `GET https://countries-info-api-1.onrender.com/api/country-info/bra`
  - **Response**: Information about Brazil.

## Features

- No authentication is required to use this API.
- Users can get information about countries by passing the country name (or partial name) as a parameter.
- This API is completely free to use and is publicly accessible.

## Production URL

You can access the API at the following URL:
`https://countries-info-api-1.onrender.com/api/country-info/<country_param>`


Where `<country_param>` is the name or part of the name of the country you want information about.

## Usage

To use this API, simply send a GET request to the above URL with a country name (or partial name) as a parameter. The API will return country data, including information like population, region, and more.

### Example:

GET `https://countries-info-api-1.onrender.com/api/country-info/guay`
This request retrieves information about Uruguay and Paraguay


GET `https://countries-info-api-1.onrender.com/api/country-info/bra`
This request retrieves information about Brazil


## No Authentication Required

This API does not require any form of authentication. Simply make your request and get the data in response!

## License

This API is free to use. Feel free to integrate it into your projects or experiment with it. 

---



Feel free to contribute or contact me if you have any questions or suggestions!
