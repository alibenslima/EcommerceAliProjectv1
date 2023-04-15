const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");
app.use(express.json());

app.use(cookieParser());

//Route import
const user = require("./routes/userRoute");
const product = require("./routes/productRoute");
app.use("/api/v1", product);
app.use("/api/v1", user);
// Middleware for errors
app.use(errorMiddleware);
module.exports = app;
