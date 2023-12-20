import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose
    .connect(url)
    .then(() => console.log("Mongodb is connect successfully"))
    .catch((error) => console.log(error));
};

export default connectDB