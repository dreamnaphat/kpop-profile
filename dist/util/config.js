"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB = exports.SERVER = void 0;
var SERVER;
(function (SERVER) {
    SERVER.PORT = process.env['SERVER_PORT'];
})(SERVER = exports.SERVER || (exports.SERVER = {}));
var DB;
(function (DB) {
    DB.USER = process.env['DB_USER'];
    DB.PWD = process.env['DB_PWD'];
    DB.NAME = process.env['DB_NAME'];
    DB.HOST = process.env['DB_HOST'];
})(DB = exports.DB || (exports.DB = {}));
