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
const Brand_1 = require("../db/entity/Brand");
const Idol_1 = require("../db/entity/Idol");
class BrandController {
    getAllBrands() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    createBrand() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    createIdol(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { brandId } = req.params;
            const brand = yield Brand_1.Brand.findOne({
                where: {
                    id: parseInt(brandId)
                }
            });
            if (brand) {
                const idol = yield Idol_1.Idol.create(Object.assign(Object.assign({}, req.body), { brand }));
                idol.save();
                res.status(201).json(idol);
            }
            else {
                res.status(400).json({ messages: "brand not found." });
            }
        });
    }
}
module.exports = new BrandController();
