'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Airplanes', [
    {
       modelNumber:"BOENG777",
       capacity:300,
       createdAt: new Date(),
      updatedAt: new Date()
      },
       {
       modelNumber:"BOENG778",
       capacity:400,
       createdAt: new Date(),
      updatedAt: new Date()
      },
       {
       modelNumber:"BOENG779",
       capacity:500,
       createdAt: new Date(),
      updatedAt: new Date()
      },
       {
       modelNumber:"BOENG880",
       capacity:350,
       createdAt: new Date(),
      updatedAt: new Date()
      }
    
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
