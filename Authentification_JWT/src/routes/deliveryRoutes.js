const express = require('express')
const router = express.Router();

const authController = require('../controllers/authContoller')


/**
 * @swagger
 * /verify/{role}/{token}:
 *   get:
 *     summary: Verify email with token
 *     tags:
 *       - Auth
 *     parameters:
 *       - name: role
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: Role of the user (e.g., admin, user, etc.)
 *       - name: token
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: Token received for email verification
 *     responses:
 *       200:
 *         description: Email verified successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       400:
 *         description: Invalid token for email verification
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       500:
 *         description: Your Token is Expired
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */

router.get("/verify/:role/:token", authController.emailVerification)

module.exports = router