const express = require("express");   // import
const { getPosts,
    createPost,
    postsByUser,
    postById,
    isPoster,
    updatePost,
    deletePost,
    photo,
    singlePost
 } = require("../controllers/post");

const { requireSignin } = require("../controllers/auth");
const { userById } = require("../controllers/user");
const {createPostValidator} = require("../validator/index")

const router = express.Router();

router.get("/posts",getPosts);
router.post("/post/new/:userId",
requireSignin,
createPost, 
createPostValidator);

// post routes

router.get("/posts/by/:userId",requireSignin,postsByUser);
router.get('/post/:postId', singlePost);
router.put('/post/:postId',requireSignin, isPoster,updatePost)
router.delete('/post/:postId',requireSignin, isPoster,deletePost)


/// Photo
router.get('/post/photo/:postId', photo);


//Any route contating :userId, our app will first execute userByID()
router.param("userId", userById);


//Any route contating :postId, our app will first execute postById()
router.param("postId", postById);



module.exports = router;