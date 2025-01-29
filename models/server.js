const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.countryInfoPath = '/api/country-info';

        // Connect to database
        this.connectDB();

        // Middlewares
        this.middlewares();

        this.routes();
    }

    async connectDB() {
        await dbConnection();
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // Parse and read body
        this.app.use(express.json());

        // PUBLIC DIRECTORY
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.countryInfoPath, require('../routes/country.routes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}

module.exports = Server;