import { Sequelize } from "sequelize";

const db = new Sequelize('1234', 'root', '',{
    host: 'localhost',
    dialect: "mysql"
});

export default db; 