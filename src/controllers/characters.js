const { charactersService } = require('../services');

const charactersController = {
  getAll: async (req, res) => {
    const characters = await charactersService.getAll();
    res.status(200).json(characters);
  },

  create: async (req, res) => {
    const { firstName, lastName, jobId, episodes } = req.body;
    const result = await charactersService.create(
      { firstName, lastName, jobId, episodes }
    );
    res.status(201).json(result);
  }
};

module.exports = charactersController;