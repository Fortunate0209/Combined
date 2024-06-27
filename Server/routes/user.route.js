const express = require('express')
const router = express.Router()
const { welcomeUser,listOfStudent, dashboard,signin, signup, postSignup,postSignin, verified, sendMail } = require('../controllers/user.controller')



router.get("/welcome", welcomeUser,)
router.get("/dashboard", dashboard,)
router.get("/verifyUser", verified,)
// router.post("/dashboard", dashboard,)
router.get("/signin", signin,)
router.post("/login", postSignin,)
// router.get("/signup", signup,)
router.post("/signup", postSignup,)
router.get("/listofstudents" ,listOfStudent)
router.get("/sendMailer", sendMail)



module.exports=router