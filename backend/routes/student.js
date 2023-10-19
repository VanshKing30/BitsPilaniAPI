const express = require("express");

const router = express.Router();



const authController = require("../controllers/Auth");
const studentController = require('../controllers/studentController');

router.post("/signup" , authController.signup);
router.post("/login" ,  authController.login);
router.get('/:id/', studentController.viewStudentProfile);






module.exports = router;