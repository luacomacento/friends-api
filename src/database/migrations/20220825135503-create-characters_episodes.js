'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('characters_episodes', {
      character_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        foreignKey: true,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'characters',
          key: 'character_id'
        }
      },
      episode_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        foreignKey: true,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'episodes',
          key: 'episode_id'
        }
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('characters_episodes');
  }
};
