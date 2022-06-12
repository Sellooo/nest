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
exports.GradeEntity = void 0;
const typeorm_1 = require("typeorm");
let GradeEntity = class GradeEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], GradeEntity.prototype, "grade_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], GradeEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'max_value' }),
    __metadata("design:type", Number)
], GradeEntity.prototype, "maxValue", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'min_value' }),
    __metadata("design:type", Number)
], GradeEntity.prototype, "minValue", void 0);
GradeEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'grade' })
], GradeEntity);
exports.GradeEntity = GradeEntity;
//# sourceMappingURL=grade.entity.js.map