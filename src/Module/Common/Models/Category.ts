import { Model, DataTypes } from 'sequelize';
import * as dbConnection from '../../../Configs/Connection';

export class Category extends Model {
    public id!: number;
    public title!: string;
    public productAmount!: number;
    public parentId!: number;
}

Category.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    productAmount: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
    },
    parentId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
    }
}, {
    tableName: 'category',
    sequelize: dbConnection.sequelize, // this bit is important
});

export interface CategorySource {
    id: number,
    title: string,
    icon: string,
    children: CategorySource[],
    parentId?: number,
    productAmount?: number
}
