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
const Idol_1 = require("../db/entity/Idol");
class IdolController {
    getAllIdols(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idols = yield Idol_1.Idol.find();
            res.status(200).json(idols);
        });
    }
    updateIdol(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idolId } = req.params;
            const idol = yield Idol_1.Idol.findOne({
                where: {
                    id: parseInt(idolId)
                }
            });
            if (idol) {
                Idol_1.Idol.save(Object.assign(Object.assign({}, idol), req.body));
                res.json(idol);
            }
            else {
                res.status(400).json({ messages: "idol not found." });
            }
        });
    }
}
module.exports = new IdolController();
