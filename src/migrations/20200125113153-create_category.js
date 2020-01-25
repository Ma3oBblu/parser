'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('category', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      productAmount: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: true,
      },
      parentId: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: true,
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('category');
  }
};
