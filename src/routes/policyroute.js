const express = require("express");
const router = express.Router();
const policycontroller = require("../controller/policycontroller");

/**
 * @swagger
 * /policy:
 *   post:
 *     summary: Create a new insurance policy
 *     tags: [Policies]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Policy'
 *     responses:
 *       201:
 *         description: Policy created successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/", policycontroller.createPolicy);

/**
 * @swagger
 * /policy:
 *   get:
 *     summary: Retrieve all policies
 *     tags: [Policies]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of policies
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Policy'
 *       404:
 *         description: No policies found
 *       500:
 *         description: Server error
 */
router.get("/", policycontroller.getPolicy);

/**
 * @swagger
 * /policy/delete:
 *   delete:
 *     summary: Delete a policy by ID
 *     tags: [Policies]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: policyId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the policy to delete
 *     responses:
 *       200:
 *         description: Policy deleted successfully
 *       400:
 *         description: Invalid ID
 *       500:
 *         description: Server error
 */
router.delete("/delete", policycontroller.deletePolicy);

/**
 * @swagger
 * /policy/update:
 *   put:
 *     summary: Update an existing policy
 *     tags: [Policies]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Policy'
 *     responses:
 *       200:
 *         description: Policy updated successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.put("/update", policycontroller.updatePolicy);

module.exports = router;
