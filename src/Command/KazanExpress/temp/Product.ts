import {BelongsToMany, BelongsTo, Column, CreatedAt, Model, PrimaryKey, Scopes, Table, UpdatedAt} from 'sequelize-typescript';
import {Category} from '../../../Module/Common/Models/Category';
import {ProductCategory} from "./ProductCategory";

@Scopes(() => ({
    category: {
        include: [{
            model: Category,
            through: {attributes: []},
        }]
    },
    full: {
        include: [{
            model: Category,
            through: {attributes: []},
        }]
    }
}))
@Table
export class Product extends Model<Product> {

    @PrimaryKey
    @Column
    id!: number;

    @Column
    title!: string;

    @Column
    rating!: number;

    @Column
    reviewsAmount!: number;

    @Column
    ordersAmount!: number;

    @Column
    totalAvailableAmount!: number;

    @Column
    description!: string;

    @Column
    categoryId!: number;

    @Column
    attributes!: any;

    @Column
    tags!: any;

    @Column
    photos!: any;

    @Column
    characteristics!: any;

    @Column
    skuList!: any;

    @Column
    sellerId!: number;

    @Column
    topFeedback!: any;

    @Column
    isEco!:boolean;

    @Column
    isPerishable!: boolean;

    @Column
    hasVerticalPhoto!: boolean;

    @Column
    showKitty!: boolean;

    @Column
    colorPhotoPreview!: boolean;

    @Column
    adultCategory!: boolean;

    @Column
    favourite!: boolean;

    @BelongsToMany(() => Category, () => ProductCategory)
    categories?: Category[];

    @CreatedAt
    @Column
    createdAt!: Date;

    @UpdatedAt
    @Column
    updatedAt!: Date;

}
