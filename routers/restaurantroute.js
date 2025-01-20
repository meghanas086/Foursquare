

const express = require("express");
const {
  findRestaurantByName,

  findRestaurantsByCity, 
} = require("../controller/restaurantController");

const router = express.Router();

router.get("/restaurants/city/:city", findRestaurantsByCity); 
router.get("/restaurants/name/:name", findRestaurantByName);

module.exports = router;


