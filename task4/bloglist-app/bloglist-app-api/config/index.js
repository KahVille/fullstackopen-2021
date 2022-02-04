const databaseUrl = process.env.NODE_ENV === 'test' ? process.env.MONGODB_URI_TEST : process.env.MONGODB_URI;
const serverPort = process.env.PORT || process.env.API_APP_PORT;
const secret = process.env.SECRET;
const isTestingEnvironment = process.env.NODE_ENV === 'test';
module.exports = { databaseUrl, serverPort, secret, isTestingEnvironment};
