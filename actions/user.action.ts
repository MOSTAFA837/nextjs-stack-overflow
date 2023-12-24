"use server";

import { connectToDatabase } from "@/lib/mongoose";
import User from "@/models/user.model";

export async function getUserById(params: any) {
  try {
    await connectToDatabase();

    const { userId } = params;

    const user = await User.findOne({ clerkId: userId });

    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
