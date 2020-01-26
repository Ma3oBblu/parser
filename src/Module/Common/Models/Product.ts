import { Model, DataTypes } from 'sequelize';
import * as dbConnection from '../../../Configs/Connection';

export class Product extends Model {
    public id!: number;
    public title!: string;
    public rating!: number;
    public reviewsAmount!: number;
    public ordersAmount!:number;
    public sellPrice!: number;
    public fullPrice!: number;
    public description!: string;
    public categoryId!: number;
    public attributes!: any;
    public tags!: any;
    public photos!: any;
    public characteristics!: any;
    public skuList!: any;
    public sellerId!: number;
    public isEco!:boolean;
    public isPerishable!:boolean;
    public adultCategory!:boolean;
}

Product.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    rating: {
        type: DataTypes.DOUBLE,
        allowNull: true
    },
    reviewsAmount: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true
    },
    ordersAmount: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true
    },
    totalAvailableAmount: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true
    },
    sellPrice: {
        type: DataTypes.DOUBLE,
        allowNull: true
    },
    fullPrice: {
        type: DataTypes.DOUBLE,
        allowNull: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    categoryId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true
    },
    attributes: {
        type: DataTypes.JSON,
        allowNull: true
    },
    tags: {
        type: DataTypes.JSON,
        allowNull: true
    },
    photos: {
        type: DataTypes.JSON,
        allowNull: true
    },
    characteristics: {
        type: DataTypes.JSON,
        allowNull: true
    },
    skuList: {
        type: DataTypes.JSON,
        allowNull: true
    },
    sellerId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true
    },
    isEco: {
        type: DataTypes.BOOLEAN
    },
    isPerishable: {
        type: DataTypes.BOOLEAN
    },
    adultCategory: {
        type: DataTypes.BOOLEAN
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
}, {
    tableName: 'product',
    sequelize: dbConnection.sequelize, // this bit is important
});

export interface ProductSourceSimple {
    productId: number,
    title: string,
    sellPrice: number,
    fullPrice: number,
    rating: number,
    ordersQuantity: number,
    isFavorite: boolean,
    isAdultCategory: boolean,
    isEco: boolean
}
