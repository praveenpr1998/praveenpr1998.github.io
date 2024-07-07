import mongoose from "mongoose";

const expSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
  },
  { collection: "experience" }
);

export default mongoose.models.Experience ||
  mongoose.model("Experience", expSchema);
