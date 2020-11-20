module.exports = {
  port: process.env.PORT || 8080,
  secret: 'mysecret',
  mongoose: {
    uri:      process.env.MONGO_URL ||  'mongodb+srv://adli:iSt2gk_6@stal.reo9r.mongodb.net/stal?retryWrites=true&w=majority',
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
