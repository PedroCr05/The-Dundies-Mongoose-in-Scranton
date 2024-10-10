const mongoose = require(`mongoose`);

mongoose
  .connect(
    `mongodb+srv://PedroCr05:-----------------@clusters.k4z0f.mongodb.net/the-dundies-mongoose-in-scranton?retryWrites=true&w=majority&appName=clusters`
  )
  .then(() => {
    console.log(`Successfully connected to MongoDB.`);
  })
  .catch((e) => {
    console.error(`Connection error`, e.message);
  });

mongoose.set(`debug`, true);

const db = mongoose.connection;

module.exports = db;
