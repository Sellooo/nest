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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextController = void 0;
const common_1 = require("@nestjs/common");
const text_service_1 = require("./text.service");
const create_text_dto_1 = require("./dto/create-text.dto");
let TextController = class TextController {
    constructor(textService) {
        this.textService = textService;
    }
    create(createTextDto) {
        return this.textService.create(createTextDto);
    }
    hello() {
        return 'deploy test';
    }
    findRandom() {
        return this.textService.findRandomText();
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_text_dto_1.CreateTextDto]),
    __metadata("design:returntype", void 0)
], TextController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/deploy'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TextController.prototype, "hello", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TextController.prototype, "findRandom", null);
TextController = __decorate([
    (0, common_1.Controller)('text'),
    __metadata("design:paramtypes", [text_service_1.TextService])
], TextController);
exports.TextController = TextController;
//# sourceMappingURL=text.controller.js.map