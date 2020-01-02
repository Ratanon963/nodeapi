const express = require("express");   // import
const { userById,allUsers } = require("../controllers/user");


const router = express.Router();


router.get("/users",allUsers);



//Any route contating :userId, our app will first execute userByID()
router.param("userId", userById);




module.exports = router;