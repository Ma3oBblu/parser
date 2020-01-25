import * as Sequelize from "sequelize";
import * as dbConnection from '../../../Configs/Connection';

module.exports = dbConnection.sequelize.define("Category", {
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
