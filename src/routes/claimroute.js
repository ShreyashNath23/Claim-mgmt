const express = require("express");
const router = express.Router();

const claimcontroller = require("../controller/claimcontroller");

// console.log(claimcontroller.createClaims);

router.post("/", claimcontroller.createClaims);
router.get("/", claimcontroller.getClaims);
router.delete("/delete", claimcontroller.deleteClaim);
router.put("/update", claimcontroller.updateClaim);

module.exports = router;
