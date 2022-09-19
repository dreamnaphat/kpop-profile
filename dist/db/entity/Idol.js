"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Idol = void 0;
const typeorm_1 = require("typeorm");
const entity_1 = require("../../util/entity");
const Brand_1 = require("./Brand");
let Idol = class Idol extends entity_1.Person {
};
__decorate([
    (0, typeorm_1.Column)({
        type: 'simple-array'
    }),
    __metadata("design:type", Array)
], Idol.prototype, "position", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Brand_1.Brand, brand => brand.idols),
    (0, typeorm_1.JoinColumn)({
        name: 'brandId'
    }),
    __metadata("design:type", Brand_1.Brand)
], Idol.prototype, "brand", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Idol.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Idol.prototype, "updatedAt", void 0);
Idol = __decorate([
    (0, typeorm_1.Entity)('idol')
], Idol);
exports.Idol = Idol;
