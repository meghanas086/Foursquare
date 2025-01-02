const mongoose = require("mongoose");
const Restaurant = require("../model/restaurant");
const { MESSAGES } = require("../constants.js");

exports.findRestaurantsByCity = async (req, res) => {
  const { city } = req.params;

  try {
    const restaurants = await Restaurant.find({ city: city });

    if (restaurants.length === 0) {
      return res
        .status(404)
        .json({ message: MESSAGES.RESTAURANT_NOT_FOUND });
    }

    res.status(200).json(restaurants);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: MESSAGES.RESTO_ERROR,
      error: error.message,
    });
  }
};

exports.findRestaurantByName = async (req, res) => {
  const { name } = req.params;

  try {
    const restaurant = await Restaurant.findOne({
      name: { $regex: new RegExp(name, "i") },
    });

    if (!restaurant) {
      return res.status(404).json({ message: MESSAGES.RESTUARANT_NOT_FOUND });
    }

    res.status(200).json(restaurant);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: MESSAGES.RESTO_ERROR,
      error: error.message,
    });
  }
};
