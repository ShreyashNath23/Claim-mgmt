class claims {
  constructor(claimid, policyid, policyholderid, amount, status) {
    this.claimid = claimid;
    this.policyid = policyid;
    this.policyholderid = policyholderid;
    this.amount = amount;
    this.status = status;
  }
}

module.exports = claims;
