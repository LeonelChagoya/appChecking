const express = require("express");

//init our Express app
const app = express();
//enable express app to receive JSON data
app.use(express.json()); //Middleware
// import routes
const { registerRouter } = require("./routes/registration.route");

app.use("/api/v1/register", registerRouter);

//catch non-existing endpoints

app.all("*", (req, res) => {
  res.status(404).json({
    status: "error",
    message: `does not exist in our server`,
  });
});
module.exports = { app };
