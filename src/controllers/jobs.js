const { jobsService } = require('../services');

const jobsController = {
  getAll: async (req, res) => {
    const jobs = await jobsService.getAll();
    res.status(200).json(jobs);
  }
};

module.exports = jobsController;