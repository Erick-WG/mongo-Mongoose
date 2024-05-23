// importing the all important mongoose ODM lib.
import mongoose from 'mongoose';

// destructuring Schema and model from mongoose.
const {Schema, model} = mongoose


// defining our schema using the destructured Schema constructor.
const Blog = new Schema({
    title: String,
    Author: String,
    body: String,
    category: String,
    createdAt: {
        type: Date,
        default: () => new Date()
    },
    updatedAt: Date,
})


// creating the model.
const blog = model('Blog', Blog)


// exporting the model as a default.
export default blog;