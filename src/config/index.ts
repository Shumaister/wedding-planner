export default {
  mongo: {
    uri: process.env.MONGO_URI || "mongodb://localhost:27017/wedding"
  },
  port: process.env.PORT || 9042
};
