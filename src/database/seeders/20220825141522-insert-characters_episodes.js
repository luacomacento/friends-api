'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('characters_episodes', [
      { character_id: 1, episode_id: 1 },
      { character_id: 1, episode_id: 2 },
      { character_id: 1, episode_id: 3 },
      { character_id: 1, episode_id: 4 },
      { character_id: 1, episode_id: 5 },
      { character_id: 1, episode_id: 6 },
      { character_id: 1, episode_id: 7 },
      { character_id: 1, episode_id: 8 },
      { character_id: 1, episode_id: 9 },
      { character_id: 1, episode_id: 10 },
      { character_id: 1, episode_id: 11 },
      { character_id: 1, episode_id: 12 },
      { character_id: 2, episode_id: 1 },
      { character_id: 2, episode_id: 2 },
      { character_id: 2, episode_id: 3 },
      { character_id: 2, episode_id: 4 },
      { character_id: 2, episode_id: 5 },
      { character_id: 2, episode_id: 6 },
      { character_id: 2, episode_id: 7 },
      { character_id: 2, episode_id: 8 },
      { character_id: 2, episode_id: 9 },
      { character_id: 2, episode_id: 10 },
      { character_id: 2, episode_id: 11 },
      { character_id: 2, episode_id: 12 },
      { character_id: 3, episode_id: 1 },
      { character_id: 3, episode_id: 2 },
      { character_id: 3, episode_id: 3 },
      { character_id: 3, episode_id: 4 },
      { character_id: 3, episode_id: 5 },
      { character_id: 3, episode_id: 6 },
      { character_id: 3, episode_id: 7 },
      { character_id: 3, episode_id: 8 },
      { character_id: 3, episode_id: 9 },
      { character_id: 3, episode_id: 10 },
      { character_id: 3, episode_id: 11 },
      { character_id: 3, episode_id: 12 },
      { character_id: 4, episode_id: 1 },
      { character_id: 4, episode_id: 2 },
      { character_id: 4, episode_id: 3 },
      { character_id: 4, episode_id: 4 },
      { character_id: 4, episode_id: 5 },
      { character_id: 4, episode_id: 6 },
      { character_id: 4, episode_id: 7 },
      { character_id: 4, episode_id: 8 },
      { character_id: 4, episode_id: 9 },
      { character_id: 4, episode_id: 10 },
      { character_id: 4, episode_id: 11 },
      { character_id: 4, episode_id: 12 },
      { character_id: 5, episode_id: 1 },
      { character_id: 5, episode_id: 2 },
      { character_id: 5, episode_id: 3 },
      { character_id: 5, episode_id: 4 },
      { character_id: 5, episode_id: 5 },
      { character_id: 5, episode_id: 6 },
      { character_id: 5, episode_id: 7 },
      { character_id: 5, episode_id: 8 },
      { character_id: 5, episode_id: 9 },
      { character_id: 5, episode_id: 10 },
      { character_id: 5, episode_id: 11 },
      { character_id: 5, episode_id: 12 },
      { character_id: 6, episode_id: 1 },
      { character_id: 6, episode_id: 2 },
      { character_id: 6, episode_id: 3 },
      { character_id: 6, episode_id: 4 },
      { character_id: 6, episode_id: 5 },
      { character_id: 6, episode_id: 6 },
      { character_id: 6, episode_id: 7 },
      { character_id: 6, episode_id: 8 },
      { character_id: 6, episode_id: 9 },
      { character_id: 6, episode_id: 10 },
      { character_id: 6, episode_id: 11 },
      { character_id: 6, episode_id: 12 },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('characters_episodes', null);
  }
};