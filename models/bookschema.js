import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    Title:{
        type:String,
        required : true
    },
    Published:{
        type:String,
        required:true
    },
     
}
)

export const Book = mongoose.model("Text",bookSchema);
