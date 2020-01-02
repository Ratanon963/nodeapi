const express = require("express");   // import
const { sigup,signin,signout } = require("../controllers/auth");
const { userById } = require("../controllers/user");

// import  validator
const { userSignupValidator } = require("../validator/index")

const router = express.Router();


router.post("/signup",userSignupValidator, sigup);
router.post("/signin", signin);
router.get("/signout", signout);


//Any route contating :userId, our app will first execute userByID()
router.param("userId", userById);



module.exports = router;