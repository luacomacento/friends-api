const { Episode, Character, Job } = require("../database/models");

const episodesService = {
  getAll: async () => {
    const result = await Episode.findAll({
      include: {
        model: Character,
        as: 'characters',
        attributes: {
          exclude: ['jobId', 'createdAt']
        },
        include: {
          model: Job,
          as: 'job',
        },
        through: {
          attributes: []
        }
      }
    });
    return result;
  }
};

module.exports = episodesService;