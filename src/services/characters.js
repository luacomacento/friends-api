const { Character } = require("../database/models");
const { Job } = require('../database/models');

const charactersService = {
  getAll: async () => {
    const result = await Character.findAll({
      attributes: { exclude: ['jobId']}, 
      // attributes: ['firstName', 'lastName'], 
      include: {
        model: Job,
        as: 'job',
        attributes: { exclude: ['jobId']}
      }
    });
    return result;
  }
};

module.exports = charactersService;