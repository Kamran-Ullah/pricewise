// We will create the logic using that we can connect with the database

import mongoose, { connect } from "mongoose";

// using export => wwe can access this function in the server.js
export const connectDb = async () => {
  await mongoose.connect("mongodb+srv://pricewise:pricewise.117@cluster0.yh0ehxu.mongodb.net/price-wise").then(() => console.log("Db Connected"));
}