import mongoose from "mongoose";

const summarySchema = new mongoose.Schema(
  {
    summary: {
      type: String,
      required: true,
    },
  },
  { collection: "summary" }
);

export default mongoose.models.Summary ||
  mongoose.model("Summary", summarySchema);
