const express = require("express");
const router = express.Router();
const policyholdercontroller = require("../controller/policyholdercontroller");

router.post("/", policyholdercontroller.createPolicyHolder);
router.get("/", policyholdercontroller.getPolicyHolder);
router.post("/delete", policyholdercontroller.deletePolicyHolder);
router.post("/update", policyholdercontroller.updatePolicyHolder);

module.exports = router;
