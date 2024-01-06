import { Document, Schema, model, models } from "mongoose";

export interface IInteraction extends Document {
  action: string;
  user: Schema.Types.ObjectId;
  question: Schema.Types.ObjectId;
  answer: Schema.Types.ObjectId;
  tags: Schema.Types.ObjectId[];
  createdAt: Date;
}

const InteractionSchema = new Schema({
  action: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  question: { type: Schema.Types.ObjectId, ref: "Question" },
  answer: { type: Schema.Types.ObjectId, ref: "Answer" },
  tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
  createdAt: { type: Date, default: Date.now },
});

export const Interaction =
  models.Interaction || model("Interaction", InteractionSchema);
