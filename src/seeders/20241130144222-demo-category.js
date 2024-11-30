'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Eletrônicos',
        description: 'Produtos eletrônicos como celulares, laptops e acessórios.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Roupas',
        description: 'Vestimentas para todos os estilos e faixas etárias.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Alimentos',
        description: 'Produtos alimentícios para todos os gostos e dietas.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
