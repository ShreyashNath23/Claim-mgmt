const express = require("express");
const router = express.Router();
const policyholdercontroller = require("../controller/policyholdercontroller");

/**
 * @swagger
 * /policyholder:
 *   post:
 *     summary: Create a new policyholder
 *     tags: [PolicyHolders]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PolicyHolder'
 *     responses:
 *       201:
 *         description: Policyholder created successfully
 *       400:
 *         description: Error 400
 *       500:
 *         description: Server error
 */
router.post("/", policyholdercontroller.createPolicyHolder);

/**
 * @swagger
 * /policyholder:
 *   get:
 *     summary: Create a new policyholder
 *     tags: [PolicyHolders]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PolicyHolder'
 *     responses:
 *       201:
 *         description: Policyholder created successfully
 *       400:
 *         description: Error 400
 *       500:
 *         description: Server error
 */
router.get("/", policyholdercontroller.getPolicyHolder);

/**
 * @swagger
 * /policyholder/delete:
 *   delete:
 *     summary: Create a new policyholder
 *     tags: [PolicyHolders]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PolicyHolder'
 *     responses:
 *       201:
 *         description: Policyholder created successfully
 *       400:
 *         description: Error 400
 *       500:
 *         description: Server error
 */
router.delete("/delete", policyholdercontroller.deletePolicyHolder);

/**
 * @swagger
 * /policyholder/update:
 *   put:
 *     summary: Create a new policyholder
 *     tags: [PolicyHolders]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PolicyHolder'
 *     responses:
 *       201:
 *         description: Policyholder created successfully
 *       400:
 *         description: Error 400
 *       500:
 *         description: Server error
 */
router.put("/update", policyholdercontroller.updatePolicy);

module.exports = router;
