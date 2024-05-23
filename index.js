import mongoose from 'mongoose';

// importing our model so we can work with it.
import blog from './model/Blog.js';


// creating a connection to the mongodb atlas.// creating a connection.
mongoose.connect("mongodb+srv://eric-wg:g0pRt2BO2uPWtKh7@cluster0.tpit2ek.mongodb.net/")

try{
    // creating instances of objects with our mode.
    // using the new key word then we utilize the create().
    const article = new blog({
        title: 'First Blog',
        Author: 'Erick',
        body: 'This is a test blog',
        category: 'Testing',
        updatedAt: Date.now(),
    });


    // Updating fields.
    article.title = 'new title'


    // inserting our blog-post into the database.
    // we call the article and add the save method to insert it to our db.
    await article.save()

}
catch{
    (e)=>{console.log(e)}
}


// Find a single blog post, you need to await the response otherwise you'll expose your data, including your atlas username and password.

const firstArticle = await blog.findOne({})
console.log(firstArticle)




















