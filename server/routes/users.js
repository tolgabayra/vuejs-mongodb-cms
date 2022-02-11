const router = require("express").Router()
const userControllers = require("../controllers/userControllers")

//create 
router.post("/adduser", userControllers.createUser)

//delete
router.delete("/:id", userControllers.deleteUser)

//get user
router.get("/:id", userControllers.getUser)

//get all user
router.get("/", userControllers.getAllUser)

router.get("/sendemail", userControllers.sendEmail)





module.exports = router