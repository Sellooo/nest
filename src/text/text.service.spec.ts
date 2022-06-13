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
    const mockGrade = {
      'grade_id': 2,
      'name': 'Epic',
      'maxValue': 20,
      'minValue': 10,
    }

    const mockText = {
      "text_text_id": 4,
      "text_title": "test3",
      "text_content": "hello2",
      "text_like": 8,
      "text_bad": 2,
      "text_created_at": "2022-06-10T12:26:44.196Z",
      "text_updated_at": "2022-06-10T12:26:44.196Z"
    }

    beforeEach(async () => {
      gradeRepository.findOneOrFail.mockResolvedValue(mockGrade);
      await service.findRandomText();
    });

    it('should failed if grade does not exists ', async () => {
      await gradeRepository.findOneOrFail.mockResolvedValue(undefined);

      try {
        await service.getCondition('Epic');
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
      }
    });

    it('should return Grade', async() => {
      const result = await service.getCondition('Epic');
      expect(result).toEqual(mockGrade);
    })

    it('should call createQueryBuilder if grade exists', async() => {
      expect(textRepository.createQueryBuilder).toHaveBeenCalledTimes(1);
    })

    it('should return result', async() => {
      jest
        .spyOn(textRepository.createQueryBuilder(), 'execute')
        .mockResolvedValue(mockText);
      const result = await service.findRandomText();

      expect(result).toEqual(mockText);
    })
  })
});
