const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const signup = async (req, res) => {
  try {
    const Usermodel = mongoose.model("user");
  const { name, email, password, confirmpassword } = req.body;
  if (!name) throw "Enter the name please name is required";
  if (!email) throw "Enter the email please email is required";
  if (!password) throw "Enter the password please password is required";
  if (!confirmpassword) throw "Confirm the password please";
  if (password < 5) throw "Password length must be above 5 letters";
  if (password != confirmpassword) throw "Your Passwords doesn't match";
  const userfindbyemail = await Usermodel.findOne({
    email:email,
  })
  if(userfindbyemail) throw "An account with this email already exist";
  const securepassword = await bcrypt.hash(password, 12)
  const usercreated = await Usermodel.create({
    name: name,
    email: email,
    password: securepassword,
  })
  res.status(200).json({
    status: "success",
    data: usercreated,
  })
  } catch (error) {
    res.status(400).json({
      status:"failed",
      message:"Some error occuered"
    })
  }
  
};
module.exports = signup