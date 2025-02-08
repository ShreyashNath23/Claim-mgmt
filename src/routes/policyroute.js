const express = require("express");
const router = express.Router();
const policycontroller = require("../controller/policycontroller");

// console.log(createPolicy);

router.post("/", policycontroller.createPolicy);
router.get("/", policycontroller.getPolicy);
router.delete("/delete", policycontroller.deletePolicy);
router.put("/update", policycontroller.updatePolicy);

// console.log(router);

module.exports = router;
