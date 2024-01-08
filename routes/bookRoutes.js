import express from 'express'
import { Book } from "../models/bookschema.js";
import { get } from 'mongoose';

const router = express.Router();

//get details fo all book
router.get("/",async(req,res)=>{

    try {
       const book = await Book.find({})
    return res.status(200).send({
       count:book.length,
       data:book
    })
    } catch (error) {
       return res.status(500).send({error:error.message})
    }
 
 })
 
//create book
 router.post("/",async(req,res)=>{
 
    try {
       
       if(!req.body.Title || !req.body.Published){
          return res.status(400).send("All Fields are required!!")
       }
       const newBook = {
          Title : req.body.Title,
          Published : req.body.Published
       };
 
       const book =await Book.create(newBook)
       return res.status(200).send({
        message:"Book Added Successfully"
       })
       
 
    } catch (error) {
       console.log(error.message);
       res.status(500).send({message:error.message})
    }
 })
 
//get one book by id
 router.get("/:id",async(req,res)=>{
 try 
 {
   const {id} = req.params
 const book = await Book.findById(id)
  return res.status(200).send(book);
 } catch (error)
  {
    return res.status(500).send({error:error.message})
 }
 })
 
//update a book
 router.put("/:id",async(req,res)=>{
 
    try 
    {
       
  if(!req.body.Title || !req.body.Published)
  {
    return res.status(400).send({message:"All Fields are require"})
  }
 
  const {id} = req.params;
 
  const result = await Book.findByIdAndUpdate(id,req.body);
   
    if(!result)
    {
       return res.status(404).json({message:"Book Not Found!!"})
    }
    return res.status(200).send({message:"Updated Successfully"})
 
  
 } 
    catch (error) 
    {
       return res.status(500).send({error:error.message});
    }
 
    
 
 })
 
 
//delete data
 router.delete("/:id",async(req,res)=>{
 
    try {
       const {id} = req.params;
 
       const result = await Book.findByIdAndDelete(id)
       if(!result)
       {
          return res.status(404).json({message:"Book Not Found!!"})
       }
        return res.status(200).send({message:"Book Deleted Successfully!"})
 
    } catch (error) {
       console.log(error.message);
       return res.status(500).send({error:error.message});
    }
 
 })
 
 
export default router;