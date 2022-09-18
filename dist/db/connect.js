"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = exports.sequelizeC = void 0;
const sequelize_1 = require("sequelize");
exports.sequelizeC = new sequelize_1.Sequelize('meaw_db', 'dreamnaphat', '123456', {
    host: "localhost\SQLEXPRESS",
    dialect: 'mssql',
});
function connect() {
    return exports.sequelizeC.authenticate()
        .then(() => {
        console.log('db connected');
    });
}
exports.connect = connect;
