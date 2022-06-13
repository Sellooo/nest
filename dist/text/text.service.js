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
exports.TextService = void 0;
const common_1 = require("@nestjs/common");
const grade_entity_1 = require("../grade/entities/grade.entity");
const typeorm_1 = require("@nestjs/typeorm");
const text_entity_1 = require("./entities/text.entity");
const typeorm_2 = require("typeorm");
let TextService = class TextService {
    constructor(textRepository, gradeRepository) {
        this.textRepository = textRepository;
        this.gradeRepository = gradeRepository;
    }
    async create({ title, content, like, bad }) {
        return await this.textRepository.save(this.textRepository.create({ title, content, like, bad }));
    }
    async findRandomText() {
        const grade = this.getRandomGrade(1, 100);
        const condition = await this.gradeRepository.findOneOrFail({
            where: {
                name: grade,
            },
        });
        return await this.textRepository
            .createQueryBuilder('text')
            .select('text')
            .where('text.like - text.bad < :max', { max: condition.maxValue })
            .andWhere('text.like - text.bad >= :min', { min: condition.minValue })
            .orderBy('Rand()')
            .limit(1)
            .execute();
    }
    getRandomGrade(min, max) {
        const num = Math.floor(Math.random() * (max - min + 1) + min);
        if (num <= 5)
            return 'Legend';
        else if (num <= 25)
            return 'Epic';
        else if (num <= 65)
            return 'Rare';
        else
            return 'Normal';
    }
};
TextService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(text_entity_1.TextEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(grade_entity_1.GradeEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], TextService);
exports.TextService = TextService;
//# sourceMappingURL=text.service.js.map