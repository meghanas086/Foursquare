const mongoose = require("mongoose");
const Review = require("../model/review");
const Restaurant = require("../model/restaurant");
const { MESSAGES } = require("../constants.js");

exports.addReview = async (req, res) => {
  const { restaurantId, rating, comment } = req.body;
  const userId = req.user.userId;

  try {
    const review = new Review({
      userId: userId,
      restaurantId: restaurantId,
      rating,
      comment,
    });

    console.log(MESSAGES.REVIEW_ADD, review);
    const savedReview = await review.save();

    console.log(MESSAGES.REVIEW_SUCCESS, savedReview);

    const updatedRestaurant = await Restaurant.findByIdAndUpdate(
      restaurantId,
      {
        $push: { reviews: savedReview._id },
      },
      { new: true }
    );

    if (!updatedRestaurant) {
      return res.status(404).json({ message: MESSAGES.RESTUARANT_NOT_FOUND });
    }

    console.log(MESSAGES.RESTUARANT_UPDATE, updatedRestaurant);

    res.json({
      message: MESSAGES.REVIEW_SUCCESS,
      review: savedReview,
      restaurant: updatedRestaurant,
    });
  } catch (error) {
    console.error(MESSAGES.REVIEW_ERROR, error);
    res.status(500).json({
      message: MESSAGES.REVIEW_ERROR,
      error: error.message,
    });
  }
};
