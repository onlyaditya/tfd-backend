const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    project_name: { type: String, required: true },
    tech_stack: [{ type: String, required: true }],
    description: { type: String, required: true },
    project_images: [{ type: String, required: true }],
    contributors: [
      { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Project = mongoose.model("project", projectSchema);

module.exports = Project;
