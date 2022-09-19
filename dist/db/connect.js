"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnection = exports.connection = void 0;
const typeorm_1 = require("typeorm");
const config_1 = require("../util/config");
exports.connection = new typeorm_1.DataSource({
    type: 'mysql',
    host: config_1.DB.HOST,
    port: 3306,
    username: config_1.DB.USER,
    password: config_1.DB.PWD,
    database: config_1.DB.NAME,
    entities: ["src/db/entity/*.ts"],
    synchronize: true
});
function dbConnection() {
    exports.connection
        .initialize()
        .then(() => {
        console.log('database is conected.');
    })
        .catch((error) => {
        console.error(error);
    });
}
exports.dbConnection = dbConnection;
