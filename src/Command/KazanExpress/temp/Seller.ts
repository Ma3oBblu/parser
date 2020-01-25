import {Model, Column, Table, BelongsToMany, Scopes, PrimaryKey, CreatedAt, UpdatedAt} from "sequelize-typescript";
import {Product} from "./Product";

@Scopes(() => ({
    products: {
        include: [
            {
                model: Product,
                through: {attributes: []},
            },
        ],
    },
}))

@Table
export class Seller extends Model<Seller> {

    @PrimaryKey
    @Column
    id!: number;

    @Column
    title!: string;

    @Column
    link!: string;

    @Column
    banner!: any;

    @Column
    description!: string;

    @Column
    registrationDate!: number;

    @Column
    rating!:number;

    @Column
    reviews!:number;

    @Column
    orders!:number;

    @Column
    official!:boolean;

    @Column
    contacts!:any;

    @Column
    categories!:any;

    @Column
    products!:any;

    @Column
    sellerAccountId!:number;

    @CreatedAt
    @Column
    createdAt!: Date;

    @UpdatedAt
    @Column
    updatedAt!: Date;
}
