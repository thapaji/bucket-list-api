import mongoose from "mongoose";

export const conectMongo = () => {
  // const uri = "mongodb://localhost:27017/bucket-list";
  try {
    mongoose
      .connect(process.env.MONGODB_URL)
      .then(() => console.log("DB connected"))
      .catch((error) => console.log(error));
  } catch (error) {
    console.log(error)
  }

};
