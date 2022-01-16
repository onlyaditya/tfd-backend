const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    profession: { type: String, required: true },
    location: { type: String, required: true },
    profile_pic: { type: String, required: true },
    cover_photo: { type: String, required: true },
    tech_stack: [{ type: String, required: true }],
    github: { type: String, required: true },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Profile = mongoose.model("profile", profileSchema);

module.exports = Profile;
