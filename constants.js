const PORTS = {
  SERVER: 5001,
};

const URLS = {
  BASE_URL: "http://localhost:5000",
  MONGODB_URL: "mongodb://127.0.0.1:27017/foursquare",
};

const MESSAGES = {
  RESTUARANT_NOT_FOUND: "Restaurant not found",
  FETCH_ERROR: "Error fetching restaurant details",
  RESTUARANT_UPDATE: "Restaurant updated with new review:",
  REVIEW_SUCCESS: "Review added successfully",
  REVIEW_ERROR: "Error adding review:",
  REVIEW_ADD: "Review object to save:",
  EMAIL_ADD: "Email is already registered",
  USER_SUCCESS: "User registered successfully",
  REGISTER_ERROR: "Error registering user",
  USER_NOT_FOUND: "User not found",
  INVALID_CRED: "Invalid credentials",
  TOKEN: "Generated Token:",
  LOGIN_SUCCESS: "Login successful",
  LOG_ERROR: "Error logging in",
  AUTH_REQUIRE: "Authorization token is required",
  INVALID_TOKEN: "Invalid or expired token",
  DB_CONNECT: "Connected to Database",
  DB_ERROR: "Error connecting to Database",
  SERVER_PORT: "Server running on port",
  RESTAURANT_NOT_FOUND:"No restaurants found in this city.",
  RESTO_ERROR:"Error fetching restaurants.",

};

module.exports = { PORTS, URLS, MESSAGES };
