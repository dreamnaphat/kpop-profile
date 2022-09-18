"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB = exports.SERVER = void 0;
const env_1 = require("./env");
var SERVER;
(function (SERVER) {
    SERVER.PORT = (0, env_1.env)("PORT", "4000");
})(SERVER = exports.SERVER || (exports.SERVER = {}));
var DB;
(function (DB) {
    DB.USER = (0, env_1.env)("DB_USER");
    DB.PWD = (0, env_1.env)("DB_PWD");
    DB.NAME = (0, env_1.env)("DB_NAME");
    DB.URL = (0, env_1.env)("DB_URL");
})(DB = exports.DB || (exports.DB = {}));
