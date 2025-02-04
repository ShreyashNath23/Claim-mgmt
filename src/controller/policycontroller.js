const Policy = require("../models/policy");
const { policy, policyholder } = require("../data/data");

module.exports = {
  createPolicy: async (req, res) => {
    if (policy.has(req.body.policyid)) {
      return res.status(400).json("Policy with this id already exist");
    }
    const newpolicy = new Policy(
      req.body.policyid,
      req.body.des,
      req.body.maxamount
    );
    policy.set(req.body.policyid, newpolicy);
    res.status(201).json(Array.from(policy.values()));
  },

  getPolicy: (req, res) => {
    // console.log(req.body.policyid);
    if (!policy.get(req.body.policyid)) {
      return res.status(404).json("This policy does not exist");
    }
    if (req.body.policyid) {
      const policyInfo = policy.get(req.body.policyid);
      res.status(200).json(policyInfo);
    } else {
      res.status(200).json(Array.from(policy.values()));
    }
  },

  updatePolicy: (req, res) => {
    //Only description and amount can be updated
    const policyInfo = policy.get(req.body.policyid);
    if (!policyInfo) {
      return res.status(404).json("This policy does not exist");
    }
    if (req.body.des) policyInfo.des = req.body.des;
    if (req.body.maxamount) policyInfo.maxamount = req.body.maxamount;
    const updatedPolicyInfo = policy.get(req.body.policyid);
    res.status(200).json(updatedPolicyInfo);
  },

  deletePolicy: (req, res) => {
    if (policy.has(req.body.policyid)) {
      policy.delete(req.body.policyid);
      res.status(201).json(Array.from(policy.values()));
    } else {
      res.status(401).json("Sorry, this policy does not exist");
    }
  },
};
