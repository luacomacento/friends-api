'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('jobs', [
      { job_title: 'chef' },
      { job_title: 'actor' },
      { job_title: 'waiter' },
      { job_title: 'professor' },
      { job_title: 'unknown' },
      { job_title: 'masseuse' },
      { job_title: 'teacher' },
      { job_title: 'commercial director' },
      { job_title: 'monkey' }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('jobs', null);
  }
};
