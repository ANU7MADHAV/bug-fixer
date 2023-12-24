"use server";

import Users from "@/database/user.model";
import { connectedDatabase } from "./mongoose";

export async function getUserById(params: any) {
  try {
    connectedDatabase();

    const { userId } = params;
    const user = await Users.findOne({ clerkId: userId });
    return user;
  } catch (error) {
    console.log(error);
  }
}
