export declare const mockRepository: () => {
    findOne: jest.Mock<any, any>;
    findOneOrFail: jest.Mock<any, any>;
    save: jest.Mock<any, any>;
    create: jest.Mock<any, any>;
    delete: jest.Mock<any, any>;
    createQueryBuilder: jest.Mock<{
        select: jest.Mock<any, any>;
        orderBy: jest.Mock<any, any>;
        limit: jest.Mock<any, any>;
        where: jest.Mock<any, any>;
        andWhere: jest.Mock<any, any>;
        setParameter: jest.Mock<any, any>;
        leftJoinAndSelect: jest.Mock<any, any>;
        execution: jest.Mock<any, any>;
        getOne: jest.Mock<any, any>;
    }, []>;
};
