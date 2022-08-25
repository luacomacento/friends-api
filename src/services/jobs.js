const { Job } = require("../database/models");

const jobsService = {
  getAll: async () => {
    const result = await Job.findAll();
    return result;
  }
};

module.exports = jobsService;