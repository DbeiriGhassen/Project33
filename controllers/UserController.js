const mongoose = require("mongoose");
const User=require("../models/User");
const postUser = async (request, response) => {
    const user = request.body;
    try {
      const searchedUser = await User.findOne({ email: user.email });
      if (searchedUser) {
        return response
          .status(400)
          .json({ message: "you are alredey registered" });
      }
      const newUser = await new User({
        password: user.password,
        email: user.email,
        age: user.age,
      });
      await newUser.save();
      response.status(200).json({ user: newUser });
    } catch (error) {
      response.status(500).json({ error: "useris not registred" });
    }
  };