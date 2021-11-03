import express from "express";
import Users from "../models/usersdb.js";

const router = express.Router();
// ____________________________________________________________
// GET ALL USERS
// URL -GET http://localhost:9000/users
// ____________________________________________________________
router.get("/", async (req, res) => {
  try {
    const user = await Users.find();
    res.json(user);
  } catch (err) {
    res.send(`Error : ${err}`);
  }
});
// ____________________________________________________________
// GET USER BY ID
// URL -GET http://localhost:9000/users/{ID}
// ____________________________________________________________
router.get("/:id", async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    res.json(user);
  } catch (err) {
    res.send(`No user found with this id`);
  }
});

// ____________________________________________________________
//CREATE NEW USER
// URL -POST  http://localhost:9000/users
// ____________________________________________________________
router.post("/", async (req, res) => {
  const user = new Users({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
  });
  try {
    const userData = await user.save();
    res.json(userData);
  } catch (err) {
    res.send(`Error : ${err}`);
  }
});
// ____________________________________________________________
// UPDATE USER BY ID
// URL - PATCH  http://localhost:9000/users/{ID}
// ____________________________________________________________
router.patch("/:id", async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    user.name = req.body.name;
    user.username = req.body.username;
    const a1 = await user.save();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});
// ____________________________________________________________
// DELETE USER BY ID
// URL - DELETE http://localhost:9000/users/{ID}
// ____________________________________________________________
router.delete("/:id", async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    const removedUser = await user.remove();
    res.json(removedUser);
  } catch (err) {
    res.send(`No user found with this id`);
  }
});

export default router;
