const express = require('express')
const router = express.Router();

const authController = require('../controllers/authContoller')

router.get("/verify/:role/:token", authController.emailVerification)
router.post('/reset-password/:token', authController.resetPassword);

module.exports = router