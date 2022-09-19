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
const Company_1 = require("../db/entity/Company");
const Brand_1 = require("../db/entity/Brand");
class CompanyController {
    getAllCompanys(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const companies = yield Company_1.Company.find();
            res.status(200).json(companies);
        });
    }
    createCompany(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const company = yield Company_1.Company.create(req.body);
            company.save();
            res.status(201).json(company);
        });
    }
    createBrand(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { companyId } = req.params;
            const company = yield Company_1.Company.findOne({
                where: {
                    id: parseInt(companyId)
                }
            });
            if (company) {
                const brand = yield Brand_1.Brand.create(Object.assign(Object.assign({}, req.body), { company }));
                brand.save();
                res.status(201).json(brand);
            }
            else {
                res.status(400).json({ messages: "company not found." });
            }
        });
    }
}
module.exports = new CompanyController();
