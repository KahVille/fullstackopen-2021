const databaseUrl = process.env.NODE_ENV === 'test' ? process.env.TEST_MONGODB_URI: process.env.MONGODB_URI;
const serverPort = process.env.PORT || process.env.API_APP_PORT;

module.exports = { databaseUrl, serverPort };
