export default () => ({
  server: {
    port: parseInt(process.env.SERVER_PORT, 10) || 3000,
  },
  mongodb: {
    uri: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017',
    dbName: process.env.MONGO_DB_NAME || 'master-country',
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'secret',
    timeout: process.env.JWT_TIMEOUT || '60m',
  },
});
