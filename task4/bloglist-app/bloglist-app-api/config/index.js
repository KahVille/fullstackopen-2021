const databaseUrl = process.env.MONGODB_URI;
const serverPort = process.env.PORT || process.env.API_APP_PORT;

module.exports = { databaseUrl, serverPort };
