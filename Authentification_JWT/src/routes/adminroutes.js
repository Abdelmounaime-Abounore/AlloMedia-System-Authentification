const express = require('express')
const router = express.Router();

const authController = require('../controllers/authContoller')

router.post('/reset-password/:token', authController.resetPassword);