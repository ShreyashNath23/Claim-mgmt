const express = require("express");
const router = express.Router();
const claimcontroller = require("../controller/claimcontroller");

// console.log(claimcontroller.createClaims);

/**
 * @swagger
 * /claim:
 *   post:
 *     summary: Submit a new claim
 *     tags: [Claims]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Claim'
 *     responses:
 *       201:
 *         description: Claim submitted successfully
 *       400:
 *         description: Invalid policyholder/policy or amount exceeds limit
 *       500:
 *         description: Server error
 */
router.post("/", claimcontroller.createClaims);

/**
 * @swagger
 * /get:
 *   post:
 *     summary: Submit a new claim
 *     tags: [Claims]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Claim'
 *     responses:
 *       201:
 *         description: Claim submitted successfully
 *       400:
 *         description: Invalid policyholder/policy or amount exceeds limit
 *       500:
 *         description: Server error
 */
router.get("/", claimcontroller.getClaims);

/**
 * @swagger
 * /claim/delete:
 *   delete:
 *     summary: Submit a new claim
 *     tags: [Claims]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Claim'
 *     responses:
 *       201:
 *         description: Claim submitted successfully
 *       400:
 *         description: Invalid policyholder/policy or amount exceeds limit
 *       500:
 *         description: Server error
 */
router.delete("/delete", claimcontroller.deleteClaim);

/**
 * @swagger
 * /claim/update:
 *   put:
 *     summary: Submit a new claim
 *     tags: [Claims]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Claim'
 *     responses:
 *       201:
 *         description: Claim submitted successfully
 *       400:
 *         description: Invalid policyholder/policy or amount exceeds limit
 *       500:
 *         description: Server error
 */
router.put("/update", claimcontroller.updateClaim);

module.exports = router;
