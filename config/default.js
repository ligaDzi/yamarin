module.exports = {
  port: process.env.PORT || 8080,
  secret: 'mysecret',
  mongoose: {
    uri:      process.env.MONGO_URL ||  'mongodb://localhost/yamarin',
    options: {
      server: {
        socketOptions: {
          keepAlive: 1
        },
        poolSize:      5
      }
    }
  },
  root: process.cwd()
};
