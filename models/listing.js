const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  description: String,

  image: {
    type: String,
    default:
      "https://unsplash.com/photos/sunbed-and-parasol-on-empty-sandy-beach-during-low-season-or-early-in-the-morning-sea-and-ocean-paradise-and-vacation-concept-olsYQkcRd5w",
    set: (v) =>
      v === ""
        ? "https://unsplash.com/photos/sunbed-and-parasol-on-empty-sandy-beach-during-low-season-or-early-in-the-morning-sea-and-ocean-paradise-and-vacation-concept-olsYQkcRd5w"
        : v,
  },
  price: Number,
  location: String,
  country: String,
  review: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});

listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.review } });
  }
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
