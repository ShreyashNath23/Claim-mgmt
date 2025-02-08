const express = require("express");
const router = express.Router();
const policyholdercontroller = require("../controller/policyholdercontroller");

router.post("/", policyholdercontroller.createPolicyHolder);
router.get("/", policyholdercontroller.getPolicyHolder);
router.delete("/delete", policyholdercontroller.deletePolicyHolder);
router.put("/update", policyholdercontroller.updatePolicyHolder);

module.exports = router;
