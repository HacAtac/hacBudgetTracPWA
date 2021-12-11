const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/budget"; // this is the default mongoDB database
//this is the default mongoDB database that actually db name is budget and the db is located in the localhost

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// mongoose.connect(MONGODB_URI, {
//   useNewUrlParser: true,
//   useFindAndModify: true,
//   useUnifiedTopology: true,
// });

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
// this is the default mongoDB database that actually db name is budget and the db is located in the localhost

// routes
app.use(require("./routes/api.js"));
app.listen(PORT, () => {
  console.log(
    `<(^.^<) (>^.^)> <(^.^<) (>^.^)> <(^.^<) HacAtac Is On Port --> ${PORT}!`
  );
});
