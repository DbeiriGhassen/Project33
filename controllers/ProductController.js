const mongoose = require("mongoose");
const Product = require("../models/Product");

const postProduct = async (request, response) => {
    const product = request.body;
    try {
      const searchedProduct= await Product.findOne({ productName: product.productName});
      if (searchedProduct) {
        return response
          .status(400)
          .json({ message: "This product already exists" });
      }
      const newProduct = await new User({
            
        productName: product.productName,
        price: product.price,
        image: product.image
      });
      await newUser.save();
      response.status(200).json({ user: newProduct });
    } catch (error) {
      response.status(500).json({ error: "product is not available" });
    }
  };