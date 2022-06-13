import { Injectable } from '@nestjs/common';
import { CreateTextDto } from './dto/create-text.dto';
import { GradeEntity } from '../grade/entities/grade.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TextEntity } from './entities/text.entity';
import { Repository } from "typeorm";

@Injectable()
export class TextService {
  constructor(
    @InjectRepository(TextEntity)
    private textRepository: Repository<TextEntity>,
    @InjectRepository(GradeEntity)
    private gradeRepository: Repository<GradeEntity>,
  ) {}

  async create({ title, content, like, bad }: CreateTextDto) {
    return await this.textRepository.save(
      this.textRepository.create({ title, content, like, bad }),
    );
  }

  getCondition(grade: string): Promise<GradeEntity> {
    return this.gradeRepository.findOneOrFail({
      where: {
        name: grade,
      },
    });
  }

  async findRandomText(): Promise<TextEntity> {
    const grade = this.getRandomGrade(1, 100);
    const condition = await this.getCondition(grade);

    return await this.textRepository
      .createQueryBuilder('text')
      .select('text')
      .where('text.like - text.bad < :max', { max: condition.maxValue })
      .andWhere('text.like - text.bad >= :min', { min: condition.minValue })
      .orderBy('Rand()')
      .limit(1)
      .execute();
  }

  getRandomGrade(min, max): string {
    const num = Math.floor(Math.random() * (max - min + 1) + min);

    if (num <= 5) return 'Legend';
    else if (num <= 25) return 'Epic';
    else if (num <= 65) return 'Rare';
    else return 'Normal';
  }
}
