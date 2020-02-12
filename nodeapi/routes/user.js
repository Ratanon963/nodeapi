const express = require("express");   // import
const { 
    userById,
    allUsers,
    getUser,
    updateUser,
    deleteUser ,
    userPhoto,
    addFollowing,
    addFollower,
    removeFollowing,
    removeFollower
} = require("../controllers/user");

const { requireSignin } = require("../controllers/auth");
const router = express.Router();



//add following and follower

router.put('/user/follow', requireSignin, addFollowing, addFollower);
router.put("/user/unfollow", requireSignin, removeFollowing, removeFollower);


router.get("/users",allUsers);
router.get("/user/:userId",requireSignin,getUser);
router.put("/user/:userId",requireSignin,updateUser);
router.delete("/user/:userId",requireSignin,deleteUser);

/// Photo
router.get("/user/photo/:userId", userPhoto)

//Any route contating :userId, our app will first execute userByID()
router.param("userId", userById);


module.exports = router;