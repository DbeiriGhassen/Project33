const mongoose = require("mongoose");
const User = require("../models/User");
const getAllUsers = async (request, response) => {
  try {
    const users = await User.find();
    response.status(200).json({ users: users });
  } catch (error) {
    response.status(500).json({ error: "failed to get all users" });
  }
};
//delete request
//i need request.params
const deleteUser = async (request, response) => {
  try {
    const id = request.params.id;
    await User.findByIdAndDelete(id);
    response
      .status(200)
      .json({ message: "the user has been succeffly deleted" });
  } catch (error) {
    response.status(500).json({ error: "delete has been  failed" });
  }
};

const getOneUser = async (request, response) => {
  const id = request.params.id
  try {
    const userFound = await User.findById(id);
    response.status(200).json({ user: userFound })

  } catch (error) {
    response.status(500).json({ error: 'failed to get one user' })
  }
}

module.exports = { getAllUsers, deleteUser, getOneUser };