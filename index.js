const express = require('express')
const app = express();
const mongoose = require('mongoose');
const port=8000;
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/moviestest',{}).then(()=>{
  console.log("Connected to mongoose")
}).catch(()=>{
  console.log("Error Occured")
})
require("./models/Userschema")

const userrouter = require("./routes/Userroutes/user.routes")

app.use("/api/user",userrouter)

app.listen(port,()=>{
  console.log(`Running at port http://localhost:${port}` )
})