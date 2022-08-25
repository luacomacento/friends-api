'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('episodes', [
      {
        title: 'The One Where Monica Gets A New Roommate',
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'The One With The Sonogram At The End',
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'The One With The Thumb',
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'The One With George Stephanopoulos',
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'The One With The East German Laundry Detergent',
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'The One With The Butt',
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'The One With The Blackout',
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'The One Where Nana Dies Twice',
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'The One Where Underdog Gets Away',
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'The One With The Monkey',
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'The One With Mrs. Bing',
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'The One With The Dozen Lasagnas',
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('episodes', null);
  }
};
