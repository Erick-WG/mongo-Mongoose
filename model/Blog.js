// importing the all important mongoose ODM lib.
import mongoose from 'mongoose';

// destructuring Schema and model from mongoose.
const {Schema, model} = mongoose


// defining our schema using the destructured Schema constructor.
const Blog = new Schema({
    title: String,
    slug: String,
    published: Boolean,
    author: String,
    content: String,
    tags: [String],
    createdAt: {
        type: Date,
        default: ()=> Date.now(),
    },
    updatedAt: Date,
    comments: [{
      user: String,
      content: String,
      votes: Number
    }]
  });


// creating the model.
const blog = model('Blog', Blog)


// exporting the model as a default.
export default blog;