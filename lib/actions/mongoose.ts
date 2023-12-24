import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectedDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) {
    return console.log("Missing Database");
  }
  if (isConnected) {
    return console.log("MongoDB is already connected");
  }
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "Bugfixer",
    });
    isConnected = true;
    console.log("Mongodb connected");
  } catch (error) {
    console.log("MongoDb is not connected");
  }
};
