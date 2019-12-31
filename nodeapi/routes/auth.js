const express = require("express");   // import
const { sigup,signin,signout } = require("../controllers/auth");

// import  validator
const { userSignupValidator } = require("../validator/index")

const router = express.Router();


router.post("/signup",userSignupValidator, sigup);
router.post("/signin", signin);

//Signout
router.get("/signout", signout);


module.exports = router;