const app = require("./app");

const dotenv = require("dotenv");
const connect = require("./config/database");
const cloudinary = require("cloudinary");

// Handling Uncaught Exception  -- exple console.log(youtube) in server.js ==> youtube is not defined
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

//config
dotenv.config({ path: "backend/config/config.env" });

// connect database
connect();

// cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

// Unhandled Promise Rejection  : exple mongo-db- ==> test connexion-----------
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
