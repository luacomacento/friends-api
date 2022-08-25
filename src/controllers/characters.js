const { charactersService } = require('../services');

const charactersController = {
  getAll: async (req, res) => {
    const characters = await charactersService.getAll();
    res.status(200).json(characters);
  }
};

module.exports = charactersController;