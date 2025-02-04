const policyHolder = require("../models/policyholder");
const { policy } = require("../data/data");
const { policyholder } = require("../data/data");

module.exports = {
  createPolicyHolder: async (req, res) => {
    if (!policy.has(req.body.policyid)) {
      return res.status(400).json("This Policy does not exist");
    } else {
      const policyInfo = policy.get(req.body.policyid);
      const maxAmount = policyInfo.maxamount;
      if (req.body.amount > maxAmount) {
        return res
          .status(401)
          .json(
            "Amount is more than the maximum amount allowed under this policy"
          );
      }
    }
    const newPolicyHolder = new policyHolder(
      req.body.policyholderid,
      req.body.policyid,
      req.body.name,
      req.body.amount
    );

    if (!policyholder.has(req.body.policyholderid)) {
      policyholder.set(req.body.policyholderid, []);
    }

    const policyHolderInfo = policyholder.get(req.body.policyholderid);

    const searchPolicyId = policyHolderInfo.find(
      (policy) => policy.policyid === req.body.policyid
    );

    if (searchPolicyId) {
      return res
        .status(400)
        .json(
          "This policy already exists for this user, please update for any changes"
        );
    }

    // policyHolderInfo.push(newPolicyHolder);
    policyholder.get(req.body.policyholderid).push(newPolicyHolder);
    res.status(201).json(Array.from(policyholder.values()));
  },

  getPolicyHolder: (req, res) => {
    const policyHolderInfo = policyholder.get(req.body.policyholderid);
    if (policyHolderInfo) {
      res.status(200).json(policyHolderInfo);
    } else {
      res.json("This policyholder does not exist");
    }
    // res.json(Array.from(policyholder.values()));
  },

  updatePolicyHolder: async (req, res) => {
    if (policyholder.has(req.body.policyholderid)) {
      const policyHolderInfo = policyholder.get(req.body.policyholderid);
      const specificPolicy = policyHolderInfo
        .flat()
        .find((policy) => policy.policyid === req.body.policyid);
      if (specificPolicy) {
        if (req.body.policyid) specificPolicy.policyid = req.body.policyid;
        if (req.body.amount) specificPolicy.amount = req.body.amount;
        if (req.body.name) specificPolicy.name = req.body.name;
        res.json(Array.from(policyholder.values()));
      } else {
        res.status(400).json("Wrong policy Selected");
      }
    } else {
      res.status(400).json("This policyholder does not exist");
    }
  },

  deletePolicyHolder: async (req, res) => {
    if (policyholder.has(req.body.policyholderid)) {
      const policyHolderInfo = policyholder.get(req.body.policyholderid);
      // console.log(typeof policyHolderInfo);
      if (req.body.policyid) {
        const specificPolicyIndex = policyHolderInfo
          .flat()
          .findIndex((policy) => policy.policyid === req.body.policyid);
        if (specificPolicyIndex !== -1) {
          policyHolderInfo.splice(specificPolicyIndex, 1);
          return res.status(200).json(policyholder);
        } else {
          return res.status(404).json("You do not have this policy");
        }
      } else {
        policyholder.delete(req.body.policyholderid);
      }
    } else {
      res
        .status(400)
        .json(
          "Sorry, you can not have the access delete this or this policy holder does not"
        );
    }
  },
};
