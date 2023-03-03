const express = require("express");
const router= new express.Router();
const Student = require("../models/student");

// 2 : we need to define 
router.get("/shub",(req,res)=>{
    res.send("hello this is shubham this side")
})

// creating databases for student ................. 
// create student data so we need to use post method 
// By using ASYNC AWAIT 
router.post("/students",async(req,res)=>{
    try {
     const user = new Student (req.body);
     const create_user =  await user.save();
     res.status(201).send(create_user);
 
    } catch (error) {
     res.status(400).send(error) 
    }
 })
 
 
 // getting api
 router.get("/students",async(req,res)=>{
     try {
     const studentsInfo = await Student.find();
     res.send(studentsInfo)
  
     } catch (error) {
      res.send(error) 
     }
  })
  
 // getting api perticular 
 
 router.get("/students/:id",async(req,res)=>{
     try {
       const id = (req.params.id)
     const studentInfo = await Student.findById({_id:id})
     res.json(studentInfo)
     //res.status(404).send(studentInfo);
  
     } catch (error) {
      res.status(500).send(error) 
     }
  })
  
 
 // router.get("/students/name",async(req,res)=>{
 //     try {
 //       const name = (req.params.name)
 //     const studentInfo = await Student.findById({name})
 //     res.json(studentInfo)
 //     //res.status(404).send(studentInfo);
  
 //     } catch (error) {
 //      res.status(500).send(error) 
 //     }
 //  })
  
 // update method 
 
 // router.patch("/students/:id", async(req,res)=>{
 //     try {
 //       const id = (req.params.id)
 //     const updatestudentInfo = await Student.findAndUpdate({_id:id}, req.body);
 //     res.send(updatestudentInfo)
 //     //res.status(404).send(studentInfo);
  
 //     } catch (error) {
 //      res.status(400).send(error) 
 //     }
 //  })
  
 
 router.patch('/students/:id', async (req, res) => {
     try {
         const id = req.params.id;
         const updatedData = req.body;
         const options = { new: true };
 
         const result = await Student.findByIdAndUpdate(
             id, updatedData, options
         )
 
         res.send(result)
     }
     catch (error) {
         res.status(400).json({ message: error.message })
     }
 })
 
 // put method 
 
 //Delete by ID Method
 router.delete('/students/:id', async (req, res) => {
     try {
         const id = req.params.id;
         const data = await Student.findByIdAndDelete(id)
         res.send(`Document with ${data.name} has been deleted..`)
     }
     catch (error) {
         res.status(400).json({ message: error.message })
     }
 })
 
 
 

module.exports = router;