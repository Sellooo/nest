import { Injectable } from '@nestjs/common';
import { CreateTextDto } from './dto/create-text.dto';
import { GradeEntity } from '../grade/entities/grade.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TextEntity } from './entities/text.entity';
import { LessThan, LessThanOrEqual, MoreThanOrEqual, Repository } from "typeorm";

@Injectable()
export class TextService {
  constructor(
    @InjectRepository(TextEntity)
    private textRepository: Repository<TextEntity>,
    @InjectRepository(GradeEntity)
    private gradeRepository: Repository<GradeEntity>,
  ) {}

  async create(createTextDto: CreateTextDto) {
    const text = new TextEntity();
    text.title = createTextDto.title;
    text.content = createTextDto.content;
    text.like = createTextDto.like;
    text.bad = createTextDto.bad;

    await this.textRepository.save(text);
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
      .where('text.like - text.bad < :like', { like: condition.maxLike })
      .andWhere('text.like - text.bad >= :like', { like: condition.minLike })
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
