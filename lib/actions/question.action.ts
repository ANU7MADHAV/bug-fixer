"use server";

import { connectedDatabase } from "./mongoose";

export const createQuestion = async (params: any) => {
  try {
    connectedDatabase();
  } catch (error) {}
};
