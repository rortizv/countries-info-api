const { MongoClient, ServerApiVersion } = require('mongodb');

let client;
let db;

const dbConnection = async () => {
    if (client) {
        // If a client is already created, return the existing connection
        return db;
    }

    const uri = process.env.MONGODB_CNN;

    client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    try {
        await client.connect();
        db = client.db('countries-info');  // Store the db object to use in queries
        console.log('Database connected');
        return db;
    } catch (error) {
        console.error('Error initializing database:', error);
        throw new Error('Error initializing database');
    }
};

// Close the connection if needed
const closeDb = async () => {
    if (client) {
        await client.close();
        console.log('Database connection closed.');
    }
};

module.exports = {
    dbConnection,
    closeDb,
};
