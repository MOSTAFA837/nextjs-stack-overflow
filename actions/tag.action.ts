"use server";

import { GetAllTagsParams, GetTopInteractedTagsParams } from "./shared.types";
import { connectToDatabase } from "@/lib/mongoose";
import { Tag } from "@/models/tag.model";
import { User } from "@/models/user.model";

export async function getTopInteractedTags(params: GetTopInteractedTagsParams) {
  try {
    connectToDatabase();

    const { userId } = params;

    const user = await User.findById(userId);

    if (!user) throw new Error("User not found.");

    // find interactions for the user and group by tags

    // interactions

    return [
      { _id: "1", name: "React" },
      { _id: "2", name: "Next.js" },
      { _id: "3", name: "Redux" },
    ];
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getAllTags(params: GetAllTagsParams) {
  try {
    connectToDatabase();

    const tags = await Tag.find({});

    return { tags };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
