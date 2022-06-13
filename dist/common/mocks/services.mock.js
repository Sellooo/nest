"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockRepository = void 0;
const mockRepository = () => ({
    findOne: jest.fn(),
    findOneOrFail: jest.fn(),
    save: jest.fn(),
    create: jest.fn(),
    delete: jest.fn(),
    createQueryBuilder: jest.fn(() => ({
        select: jest.fn().mockReturnThis(),
        orderBy: jest.fn().mockReturnThis(),
        limit: jest.fn().mockReturnThis(),
        where: jest.fn().mockReturnThis(),
        andWhere: jest.fn().mockReturnThis(),
        setParameter: jest.fn().mockReturnThis(),
        leftJoinAndSelect: jest.fn().mockReturnThis(),
        execution: jest.fn().mockReturnThis(),
        getOne: jest.fn().mockReturnThis(),
    })),
});
exports.mockRepository = mockRepository;
//# sourceMappingURL=services.mock.js.map