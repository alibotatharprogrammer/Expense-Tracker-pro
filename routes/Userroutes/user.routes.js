const express=require("express");
const signup=require("./controllers/register")

const userrouter= express.Router();

userrouter.post("/signup",signup)



module.exports=userrouter;