module.exports = {
    /**
     * Конфигурация для sequelizejs. Соединение с MySQL базой.
     * @see http://docs.sequelizejs.com/class/lib/sequelize.js~Sequelize.html#instance-constructor-constructor
     */
    mysql: {
        dialect: 'mysql',
        host: '',
        username: '',
        password: '',
        database: '',
        logging: false,
        port: 3306,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    },
};
