const express = require("express");   // import
const { getPosts,
    createPost,
    postsByUser,
    postById,
    isPoster,
    updatePost,
    deletePost
 } = require("../controllers/post");
const {createPostValidator} = require("../validator/index")
const { requireSignin } = require("../controllers/auth");
const { userById } = require("../controllers/user");


const router = express.Router();

router.get("/posts",getPosts);
router.post("/post/new/:userId",
requireSignin,
createPost,
createPostValidator);

router.get("/posts/by/:userId",requireSignin,postsByUser);
router.put('/post/:postId',requireSignin, isPoster,updatePost)
router.delete('/post/:postId',requireSignin, isPoster,deletePost)



//Any route contating :userId, our app will first execute userByID()
router.param("userId", userById);


//Any route contating :postId, our app will first execute postById()
router.param("postId", postById);



module.exports = router;