module.exports = {
    /**
     * Конфигурация для sequelizejs. Соединение с MySQL базой.
     * @see http://docs.sequelizejs.com/class/lib/sequelize.js~Sequelize.html#instance-constructor-constructor
     */
    mysql2: {
        dialect: 'mysql',
        host: '',
        username: '',
        password: '',
        database: '',
        logging: true,
        port: 3306,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    },
};
