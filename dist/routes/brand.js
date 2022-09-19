"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.brandRouter = void 0;
const express_1 = __importDefault(require("express"));
const BrandController_1 = __importDefault(require("../controller/BrandController"));
const router = express_1.default.Router();
exports.brandRouter = router;
router.get('/', BrandController_1.default.getAllBrands);
router.post('/', BrandController_1.default.createBrand);
router.post('/:brandId/idol', BrandController_1.default.createIdol);
