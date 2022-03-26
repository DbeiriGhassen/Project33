const User = require("../models/User");
const bcrypt=require("bcryptjs"); 
const jwt = require("jsonwebtoken");
const registerController  = async (request, response) => {
  const userInfo = request.body.userInfo;                  
  try {
    const searcheUser = await User.findOne({ email: userInfo.email });
    if (searcheUser) {
      return response
        .status (400). json({ errors: [{ msg: "user already exist" }] });
       
    }
    const hashedPasword = await bcrypt.hash(userInfo.password, 10);
    const user = await new User({
      name: userInfo.name,
      email: userInfo.email,
      password: hashedPasword,
    });

    await user.save();
const token = jwt.sign({
  name: user.name,
  email: user.email,
  id: user.id,},'shhhhh');
  response.status (200).json({user, token})
} catch (error) {
  response.status (500).json({ errors: [{ msg: "error server" }]})
}
};

module.exports={registerController}