import mongoose from "mongoose";

const businessSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    businessName: {
      type: String,
      required: true,
    },
    businessType: {
      type: String,
      required: true,
    },

    document: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PDF",
      required: true,
    },
  },
  { timestamps: true }
);

export const Business = mongoose.model("Business", businessSchema);
