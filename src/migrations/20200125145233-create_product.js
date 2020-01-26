'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('product', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      rating: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      reviewsAmount: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: true
      },
      ordersAmount: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: true
      },
      totalAvailableAmount: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: true
      },
      sellPrice: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      fullPrice: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      categoryId: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: true
      },
      attributes: {
        type: Sequelize.JSON,
        allowNull: true
      },
      tags: {
        type: Sequelize.JSON,
        allowNull: true
      },
      photos: {
        type: Sequelize.JSON,
        allowNull: true
      },
      characteristics: {
        type: Sequelize.JSON,
        allowNull: true
      },
      skuList: {
        type: Sequelize.JSON,
        allowNull: true
      },
      sellerId: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: true
      },
      isEco: {
        type: Sequelize.BOOLEAN,
        default: false
      },
      isPerishable: {
        type: Sequelize.BOOLEAN,
        default: false
      },
      adultCategory: {
        type: Sequelize.BOOLEAN,
        default: false
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('product');
  }
};
