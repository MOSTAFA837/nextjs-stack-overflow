import mongoose from "mongoose";

export async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URL!);

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("mongodb connected successfully");
    });

    connection.on("error", (error) => {
      console.log(error);
    });
  } catch (error) {
    console.log(error);
  }
}

// let isConnected = false;

// export const connectToDatabase = async () => {
//   mongoose.set("strictQuery", true);

//   if (!process.env.MONGODB_URL) return console.log("MONGODB_URL not found");
//   if (isConnected) return console.log("Already connected to MongoDB");

//   try {
//     await mongoose.connect(process.env.MONGODB_URL);
//     isConnected = true;
//   } catch (error) {
//     console.log(error);
//   }
// };
