"use server";

import { connectToDatabase } from "@/lib/mongoose";
import { ViewQuestionParams } from "./shared.types";
import { Question } from "@/models/question.model";
import { Interaction } from "@/models/interaction.model";
import { revalidatePath } from "next/cache";

export async function viewQuestion(params: ViewQuestionParams) {
  try {
    await connectToDatabase();

    const { questionId, userId, path } = params;

    // update view count for the question
    await Question.findByIdAndUpdate(
      questionId,
      { $inc: { views: 1 } },
      { new: true }
    );

    revalidatePath(path);

    if (userId) {
      const existingInteraction = await Interaction.findOne({
        user: userId,
        action: "view",
        question: questionId,
      });

      if (existingInteraction) return console.log("User already viewed");

      // create interaction
      await Interaction.create({
        user: userId,
        action: "view",
        question: questionId,
      });
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}
