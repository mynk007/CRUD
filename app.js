import express from "express";
import connectDB from "./db.js";
import userRoutes from "./routes/users.js";

connectDB();
const app = express();

app.use(express.json());
app.use("/users", userRoutes);

app.listen(9000, function () {
  console.log("Server started");
});
