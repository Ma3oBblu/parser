import { Model, DataTypes } from 'sequelize';
import * as dbConnection from '../../../Configs/Connection';

export class Seller extends Model {
    public id!: number;
    public title!: string;
    public link!: string;
    public description!: string;
    public registrationDate!: number;
    public rating!: number;
    public reviews!: number;
    public orders!: number;
    public official!: boolean;
    public contacts!: any;
    public sellerAccountId!: number;
}

Seller.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    link: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    description: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    registrationDate: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true
    },
    rating: {
        type: DataTypes.DOUBLE,
        allowNull: true
    },
    reviews: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true
    },
    orders: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true
    },
    official: {
        type: DataTypes.BOOLEAN,
    },
    contacts: {
        type: DataTypes.JSON,
        allowNull: true
    },
    sellerAccountId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE
    }
}, {
    tableName: 'seller',
    sequelize: dbConnection.sequelize, // this bit is important
});

export interface SellerSource {
    id: number,
    title?: string,
    link?: string,
    description?: string,
    registrationDate?: number,
    rating?: number
    reviews?: number,
    orders?: number,
    official?: boolean,
    contacts?: any,
    sellerAccountId?: number
}
