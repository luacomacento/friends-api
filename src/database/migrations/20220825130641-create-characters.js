'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('characters', {
      character_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      job_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('characters');
  }
};
