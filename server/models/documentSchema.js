import mongoose from "mongoose";

const documentSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
    },

    data: {
      type: Object,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const document = mongoose.model("document", documentSchema);

export default document;
