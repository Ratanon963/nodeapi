const express = require("express");   // import
const { 
    userById,
    allUsers,
    getUser,
    updateUser,
    deleteUser 
} = require("../controllers/user");
const { requireSignin } = require("../controllers/auth");

const router = express.Router();


router.get("/users",allUsers);
router.get("/user/:userId",requireSignin,getUser);
router.put("/user/:userId",requireSignin,updateUser);
router.delete("/user/:userId",requireSignin,deleteUser);


//Any route contating :userId, our app will first execute userByID()
router.param("userId", userById);




module.exports = router;