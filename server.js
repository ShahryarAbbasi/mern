const { application } = require('express');

require('dotenv').config();

const {PORT, MONGODB_URI} = process.env;
const express = require('express');
const app = express()
const mongoose = require('mongoose')
const athleteController = require('./controllers/athlete-controller')
const cors = require("cors")
const morgan = require("morgan")

mongoose.connect(MONGODB_URI);
mongoose.connection
  .on("open", () => console.log("Your are connected to mongoose"))
  .on("close", () => console.log("Your are disconnected from mongoose"))
  .on("error", (error) => console.log(error));

//middlewear

app.use(express.json());
app.use(cors()); // to prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging for development
app.use('/athlete', athleteController)


//routes
app.get('/', (req, res) => {
    res.send("Hello World!");
})

app.listen(PORT, () => {
    console.log(`I am listening on port ${PORT}`)
})