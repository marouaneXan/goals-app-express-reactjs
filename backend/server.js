const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddlware");
const PORT = process.env.PORT || 5000;
const connectDB=require('./config/db')

connectDB()


const app = express();


//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/goals", require("./routes/goalRoutes"));

//errors
app.use(errorHandler);

app.listen(PORT, () => {
  console.log("Server connected with the PORT " + PORT);
});
