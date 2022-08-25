'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('characters', [
      {
        first_name: 'Chandler',
        last_name: 'Bing',
        job_id: 5,
      },
      {
        first_name: 'Monica',
        last_name: 'Geller',
        job_id: 1,
      },
      {
        first_name: 'Joey',
        last_name: 'Tribbiani',
        job_id: 2,
      },
      {
        first_name: 'Phoebe',
        last_name: 'Buffay',
        job_id: 6,
      },
      {
        first_name: 'Rachel',
        last_name: 'Green',
        job_id: 3,
      },
      {
        first_name: 'Ross',
        last_name: 'Geller',
        job_id: 4,
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('jobs', null);
  }
};
