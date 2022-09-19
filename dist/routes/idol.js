"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.idolRouter = void 0;
const express_1 = __importDefault(require("express"));
const IdolController_1 = __importDefault(require("../controller/IdolController"));
const router = express_1.default.Router();
exports.idolRouter = router;
router.get('/', IdolController_1.default.getAllIdols);
router.put('/:idolId', IdolController_1.default.updateIdol);
