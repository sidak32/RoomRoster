const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

const lisitngController = require("../controllers/listings.js");

const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

router
  .route("/")
  .get(wrapAsync(lisitngController.index)) //Index Route
  .post(
    //Create route
    isLoggedIn,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(lisitngController.createListing),
  );

//New Route
router.get("/new", isLoggedIn, lisitngController.renderNewForm);

router
  .route("/:id")
  .get(wrapAsync(lisitngController.showListing)) // Show Route
  .put(
    //Update Route
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(lisitngController.updateListing),
  )
  .delete(isLoggedIn, isOwner, wrapAsync(lisitngController.deleteListing)); // Delete Route

//Edit Route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(lisitngController.renderEditForm),
);

module.exports = router;
