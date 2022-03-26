const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  deleteUser,
  getOneUser,
} = require("../Controllers/adminController");
router.get("/", getAllUsers);
router.delete("/:id", deleteUser);
router.get("/:id", getOneUser);
module.exports = router;