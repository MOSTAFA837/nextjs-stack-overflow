"use server";

import Question from "@/models/question.model";
import { connectToDatabase } from "../lib/mongoose";
import Tag from "@/models/tag.model";

export async function createQuestion(params: any) {
  try {
    connectToDatabase();

    const { title, content, tags, author, path } = params;

    // create the question
    const question = await Question.create({
      title,
      content,
      author,
    });

    const tagDocuments = [];

    // create the tags or get them if they already exists
    for (const tag of tags) {
      const existingTag = await Tag.findOneAndUpdate(
        { name: { $regex: new RegExp(`^${tag}$`, "i") } },
        { $setOnInsert: { name: tag }, $push: { question: question._id } },
        { upsert: true, new: true }
      );

      tagDocuments.push(existingTag._id);
    }

    await Question.findByIdAndUpdate(question._id, {
      $push: { tags: { $each: tagDocuments } },
    });

    // create an interaction record for the user's ask_question action

    // increment author's reputaion by +5 points for creating a question
  } catch (error) {}
}
