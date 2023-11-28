"use server";

import { connectToDatabase } from "../lib/mongoose";

export async function createQuestion(params: any) {
  try {
    connectToDatabase();

    const { title } = params;

    console.log(title);
  } catch (error) {}
}
