const Claims = require("../models/claims");
const { policy } = require("../data/data");
const { policyholder } = require("../data/data");
const { claims } = require("../data/data");

module.exports = {
  createClaims: async (req, res) => {
    if (policyholder.has(req.body.policyholderid)) {
      const policyHolderInfo = policyholder.get(req.body.policyholderid);
      // const policyInfo = req.body.policyid;
      // const amountInfo = req.body.amount;
      const policyInfo = policyHolderInfo
        .flat()
        .find((policy) => policy.policyid === req.body.policyid);

      if (policyInfo && policyInfo.amount < req.body.amount) {
        return res
          .status(400)
          .json("Claim amount is more than insaurance amount");
      }

      if (policyInfo) {
        const newClaim = new Claims(
          req.body.claimid,
          req.body.policyid,
          req.body.policyholderid,
          req.body.amount,
          req.body.status
        );
        claims.set(req.body.claimid, newClaim);
        return res.status(200).json(Array.from(claims.values()));
      } else {
        return res.status(404).json("You do not have this policy");
      }
    } else {
      return res.status(400).json("This policyholder does not exist");
    }
    // console.log(newClaim);
    // claims.set(req.body.claimid, newClaim);
    // return res.status(201).json(Array.from(claims.values()));
  },

  getClaims: (req, res) => {
    // res.json(Array.from(claims.values()));
    const reqInfo = claims.get(req.body.claimid);
    if (reqInfo) {
      return res.status(200).json(reqInfo);
    } else {
      return res.status(404).json("This claim does not exist");
    }
  },

  updateClaim: (req, res) => {
    // Validate required fields
    if (!req.body.claimid || !req.body.policyholderid || !req.body.amount) {
      return res
        .status(400)
        .json("Please enter claimid, policyholderid, and amount to continue");
    }

    // Retrieve the claim first to ensure it exists
    const claimInfo = claims.get(req.body.claimid);
    if (!claimInfo) {
      return res.status(404).json("This claim does not exist");
    }

    // Check the status of the claim
    if (claimInfo.status !== "pending") {
      return res.status(400).json("This claim is closed");
    }

    try {
      const policyHolderInfo = policyholder.get(req.body.policyholderid);
      if (!policyHolderInfo) {
        return res.status(404).json("Policyholder not found");
      }

      const insuranceAmount = policyHolderInfo.amount;
      const claimAmount = req.body.amount;

      // if (isNaN(insuranceAmount) || isNaN(claimAmount)) {
      //   return res.status(400).json("Invalid amount provided");
      // }

      if (claimAmount > insuranceAmount) {
        return res
          .status(400)
          .json("Claim amount is greater than insurance amount");
      }

      claimInfo.amount = claimAmount;
      claimInfo.status = req.body.status;
      claims.set(req.body.claimid, claimInfo);

      return res.status(200).json(Array.from(claims.values()));
    } catch (error) {
      console.error("Error updating claim:", error);
      return res.status(500).json("Internal Server Error");
    }
  },

  deleteClaim: (req, res) => {
    const status = claims.get(req.body.claimid).status;
    if (status === "closed") {
      if (claims.has(req.body.claimid)) {
        const claiminfo = claims.get(req.body.claimid);
        const claimholder = claiminfo.policyholderid;
        const claimpolicy = claiminfo.policyid;
        if (
          claimholder === req.body.policyholderid &&
          claimpolicy === req.body.policyid
        ) {
          claims.delete(req.body.claimid);
          res.json(Array.from(claims.values()));
        } else {
          return res
            .status(400)
            .json("Sorry you do not have permission to delete this claim");
        }
      } else {
        return res
          .status(400)
          .json("Sorry you do not have permission to delete this claim");
      }
    } else {
      res
        .status(500)
        .json("The claim is still pending, therefore can not be deleted");
    }
  },
};
