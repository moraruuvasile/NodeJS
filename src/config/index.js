import mongodb from 'mongodb';

export default {
  // "port": 3005,
  // "mongoUrl": "mongodb://localhost:27017/chat-api",
  "port": process.env.PORT,
  "mongoUrl": "mongodb://vasile:123456az@ds129051.mlab.com:29051/heroku_70z61l78",
  "bodyLimit": "100kb"
}
