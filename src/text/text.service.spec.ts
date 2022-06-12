import { Test, TestingModule } from '@nestjs/testing';
import { TextService } from './text.service';
import { TextEntity } from "./entities/text.entity";
import { getRepositoryToken, TypeOrmModule } from "@nestjs/typeorm";
import { GradeEntity } from "../grade/entities/grade.entity";
import { mockRepository } from "../common/mocks/services.mock";
import { MockRepository } from "../common/mocks/interfaces.mock";
import { NotFoundException } from "@nestjs/common";

describe('TextService', () => {
  let service: TextService;
  let textRepository: MockRepository<TextEntity>;
  let gradeRepository: MockRepository<GradeEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TextService,
        {
          provide: getRepositoryToken(TextEntity),
          useValue: mockRepository(),
        },
        {
          provide: getRepositoryToken(GradeEntity),
          useValue: mockRepository(),
        },
      ],
    }).compile();

    service = module.get<TextService>(TextService);
    textRepository = module.get(getRepositoryToken(TextEntity));
    gradeRepository = module.get(getRepositoryToken(GradeEntity));
  });

  describe('findRandomText', () => {
    beforeEach(async () => {
      await gradeRepository.findOneOrFail.mockResolvedValue('Legend');
      await service.findRandomText();
    });

    it('should failed if grade does not exists ', async () => {
      await gradeRepository.findOneOrFail.mockResolvedValue(undefined);

      try {
        await service.getCondition('Legend');
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
      }
    })
  })
});
