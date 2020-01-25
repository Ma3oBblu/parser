import {Dialect} from "sequelize";

export let mysql: MysqlConfigI  = undefined;

export interface MysqlConfigI {
    dialect: Dialect,
    host: string,
    username: string,
    password: string,
    database: string,
    logging: boolean,
    port: number,
    pool: {
        max: number,
        min: number,
        acquire: number,
        idle: number
    }
}
export interface Config {
    mysql: MysqlConfigI;
}
