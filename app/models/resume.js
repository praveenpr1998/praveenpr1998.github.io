import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema(
  {
    driveLink: {
      type: String,
      required: true,
    },
  },
  { collection: "resume" }
);

export default mongoose.models.Resume || mongoose.model("Resume", resumeSchema);
