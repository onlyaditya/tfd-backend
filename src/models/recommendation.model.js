const mongoose = require("mongoose");

const recommendationSchema = new mongoose.Schema(
  {
    giver_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    receiver_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    comments: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Recommendation = mongoose.model("recommendation", recommendationSchema);

module.exports = Recommendation;
