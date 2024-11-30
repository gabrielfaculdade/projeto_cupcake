'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'João Silva',
        email: 'joao.silva@example.com',
        password: 'senha123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Maria Oliveira',
        email: 'maria.oliveira@example.com',
        password: 'senha456',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Carlos Souza',
        email: 'carlos.souza@example.com',
        password: 'senha789',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
