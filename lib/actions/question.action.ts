"use server";

import Tags from "@/database/tag.model";
import { connectedDatabase } from "./mongoose";
import Questions from "@/database/question.model";

export const createQuestion = async (params: any) => {
  try {
    connectedDatabase();
    const { title, content, tags, author, path } = params;

    const question = await Questions.create({
      title,
      content,
      author,
    });

    const tagDocuments = [];

    for (const tag of tags) {
      const existingTag = await Tags.findOneAndUpdate(
        { name: { $regex: new RegExp(`^${tag}$`, "i") } },
        { $setOnInsert: { name: tag }, $push: { questions: question._id } },
        { upsert: true, new: true }
      );
      tagDocuments.push(existingTag._id);
    }
  } catch (error) {}
};
