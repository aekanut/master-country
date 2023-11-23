export default () => ({
  server: {
    port: parseInt(process.env.SERVER_PORT, 10) || 3000,
  },
  mongo: {
    host: process.env.MONGO_HOST || 'mongodb://127.0.0.1:27017',
    databaseName: process.env.MONGO_DATABASE_NAME || 'master-country',
  },
});
