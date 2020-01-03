const express = require("express");   // import
const { getPosts,createPost,postsByUser } = require("../controllers/post");
const {createPostValidator} = require("../validator/index")
const { requireSignin } = require("../controllers/auth");
const { userById } = require("../controllers/user");
const router = express.Router();


router.get("/",getPosts);

router.post("/post/new/:userId",
requireSignin,
createPost,
createPostValidator);

router.get("/posts/by/:userId",requireSignin,postsByUser);



//Any route contating :userId, our app will first execute userByID()
router.param("userId", userById);




module.exports = router;