const { Character, Job, CharacterEpisode, sequelize } = require("../database/models");

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
  },

  create: async ({ firstName, lastName, jobId, episodes }) => {
    const transactionResult = await sequelize.transaction(async (transaction) => {

      let finalCharacterId;

      try {
        const {characterId} = await Character.create(
          {firstName, lastName, jobId},
          { transaction }
        );
        finalCharacterId = characterId

      } catch (error) {
        if (error.message.includes('a foreign key constraint fails')) {
          throw new Error('Job doesn\'t exist')
        }
        throw error;
      }
      
      const charEpisodes = episodes.map((number) => ({ finalCharacterId, episodeId: number }));
  
      const result = await CharacterEpisode.bulkCreate(
        charEpisodes,
        { transaction }
      );

      return result;
    });

    return transactionResult;
  }
};

module.exports = charactersService;