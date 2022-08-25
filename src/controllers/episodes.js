const { episodesService } = require('../services');

const episodesController = {
  getAll: async (req, res) => {
    const episodes = await episodesService.getAll();
    res.status(200).json(episodes);
  }
};

module.exports = episodesController;