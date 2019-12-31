const Post = require('../models/post')


exports.getPosts = (req,res) => {
    const posts = Post.find().select("_id title body")
    .then((posts) => {
        res.json({posts: posts})     // key and value
    })
    .catch(err => console.log(err));

}; 


exports.createPost = (req,res) => {
    const post = new Post(req.body);
   
    post.save().then(result => {
        res.json({   //  res.status(200).json is the default
            post: result 
        });
    }); 

};


