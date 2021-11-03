import mongoose from "mongoose";

const MONGO_URI = "mongodb://localhost/UsersDB";
const connectDB = async () => {
  console.log(MONGO_URI);

  // _________________________DATABASE CONNECTION___________________________
  try {
    const conn = await mongoose.connect(MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected ${conn.connection.host}   `);
  } catch (e) {
    console.log(`Error: ${e.message}`);
    process.exit(1);
  }
};

export default connectDB;
