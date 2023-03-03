const express = require("express");
const app = express();
// const validator = require("validator");
// const mongoose = require("mongoose");
const Student = require("./models/student");
require("./db/conn")
const StudentRouter = require("./routers/student")

const port = process.env.PORT || 8000;


app.use(express.json())  //middleware that defienes the thata we are gettin in text format to convert data into json
app.use(StudentRouter);




// app.post("/students",(req,res)=>{
//     console.log(req.body);
//     // const user = new Student (req.body);
//     user.save().then(()=>{
//         res.status(201).send(user); //201 for ctreated data
//     })
// //  res.send("hell from the other side");
// })


// 1  : create router 
// const router = new express.Router()

// // 2 : we need to define 
// router.get("/shub",(req,res)=>{
//     res.send("hello this is shubham this side")
// })
// 3: we need to register router 
// app.use(router);





app.listen(port),()=>{
    console.log(`connected on port no${port}`);
};




