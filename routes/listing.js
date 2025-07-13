const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

const lisitngController = require("../controllers/listings.js");

// Index Route
router.get("/", wrapAsync(lisitngController.index));

//New Route
router.get("/new", isLoggedIn, lisitngController.renderNewForm);

// Show Route
router.get("/:id", wrapAsync(lisitngController.showListing));

//Create Route
router.post(
  "/",
  isLoggedIn,
  validateListing,
  wrapAsync(lisitngController.createListing)
);

//Edit Route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(lisitngController.renderEditForm)
);

//Update Route
router.put(
  "/:id",
  isLoggedIn,
  isOwner,
  validateListing,
  wrapAsync(lisitngController.updateListing)
);

// Delete Route
router.delete(
  "/:id",
  isLoggedIn,
  isOwner,
  wrapAsync(lisitngController.deleteListing)
);

module.exports = router;
