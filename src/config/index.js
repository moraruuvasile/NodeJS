import mongodb from 'mongodb';

export default {
  // "port": 3005,
  // "mongoUrl": "mongodb://localhost:27017/chat-api",
  "port": process.env.PORT,
  "mongoUrl": "mongodb+srv://user1:123456az@cluster0-klesb.mongodb.net/Cluster0?retryWrites=true&w=majority",
  "bodyLimit": "100kb"
}
