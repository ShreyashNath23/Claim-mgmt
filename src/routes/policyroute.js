const express = require("express");
const router = express.Router();
const policycontroller = require("../controller/policycontroller");

// console.log(createPolicy);

router.post("/", policycontroller.createPolicy);
router.get("/", policycontroller.getPolicy);
router.post("/delete", policycontroller.deletePolicy);
router.post("/update", policycontroller.updatePolicy);

// console.log(router);

module.exports = router;
