const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routers/user");
const restaurantRoutes = require("./routers/restaurantroute");
const reviewRoutes = require("./routers/reviewroute");

const { PORTS, URLS, MESSAGES } = require("./constants.js");
const PORT = PORTS.SERVER || 5000;

const app = express();
app.use(express.json());

app.use("/api", userRoutes);

app.use("/api", restaurantRoutes);

app.use("/api", reviewRoutes);

mongoose
  .connect(URLS.MONGODB_URL, {})
  .then(() => {
    console.log(MESSAGES.DB_CONNECT);
  })
  .catch((error) => {
    console.error(MESSAGES.DB_ERROR, error);
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
