import {Model, Column, Table, ForeignKey} from "sequelize-typescript";
import {Product} from "./Product";
import {Category} from "../../../Module/Common/Models/Category";

@Table
export class ProductCategory extends Model<ProductCategory> {

    @ForeignKey(() => Product)
    @Column
    categoryId!: number;

    @ForeignKey(() => Category)
    @Column
    productId!: number;
}
