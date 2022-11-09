//!! MODULES
const express = require("express");
const app = express();
let  path = require('path');
// To access the hidden .env file we will use the dotenv package
//require("dotenv").config();

const surveysRouter = require("./routes/survey");
const notFound = require("./middleware/not-found");
//const connectDB = require("./db/connect");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//!! MIDDLEWARE
// to notify where the static files are located
app.use(express.static("../public"));



//!! ROUTES
app.use("/", surveysRouter);

//For every other routes that is not found (the order is important!!!)
app.use(notFound);
//app.use(errorHandlerMiddleware);

// !! START THE SERVER
const port = process.env.PORT || 3000;

// Whenever we use async it is better to use try/catch
const start = async () => {
  try {
    // tO USE THE .env FILE WE will USE process.env
    //await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}....`));
  } catch (error) {
    console.log(error);
  }
};

start();

