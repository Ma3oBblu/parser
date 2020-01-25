'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('seller', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      link: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      description: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      registrationDate: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: true
      },
      rating: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      reviews: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: true
      },
      orders: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: true
      },
      official: {
        type: Sequelize.BOOLEAN,
        default: false
      },
      contacts: {
        type: Sequelize.JSON,
        allowNull: true
      },
      sellerAccountId: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('seller');
  }
};
