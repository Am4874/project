import mongoose, { mongo, Schema } from "mongoose";

const subscriptionSchema = new Schema(
  {
    subscriber: {
      type: Schema.Types.ObjectId,
      required: "User",
    },
    channel: {
      type: Schema.Types.ObjectId,
      required: "User",
    },
  },
  { timestamps: true }
);

export const Subscription = mongoose.model("Subscription", subscriptionSchema);
