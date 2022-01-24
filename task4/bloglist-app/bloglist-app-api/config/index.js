const databaseUrl = process.env.NODE_ENV === 'test' ? process.env.MONGODB_URI_TEST : process.env.MONGODB_URI;
const serverPort = process.env.PORT || process.env.API_APP_PORT;
const secret = process.env.SECRET;

module.exports = { databaseUrl, serverPort, secret };
