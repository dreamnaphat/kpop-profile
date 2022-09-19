"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require('dotenv').config();
require("reflect-metadata");
const config_1 = require("./util/config");
const connect_1 = require("./db/connect");
/* routes import */
const company_1 = require("./routes/company");
const brand_1 = require("./routes/brand");
const idol_1 = require("./routes/idol");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const apiPath = '/api/v1/';
app.use(apiPath + 'company', company_1.companyRouter);
app.use(apiPath + 'brand', brand_1.brandRouter);
app.use(apiPath + 'idol', idol_1.idolRouter);
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    /* database conection */
    (0, connect_1.dbConnection)();
    /* server start */
    app.listen(config_1.SERVER.PORT, () => {
        console.log('server is running on port ' + config_1.SERVER.PORT);
    });
});
main();
