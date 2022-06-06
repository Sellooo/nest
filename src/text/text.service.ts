import { Injectable } from '@nestjs/common';
import { CreateTextDto } from './dto/create-text.dto';
import { InjectModel } from "@nestjs/mongoose";
import { TextDocument, Text } from "./entities/text.entity";
import { Model } from "mongoose";
import { Grade, GradeDocument } from "../grade/entities/grade.entity";

@Injectable()
export class TextService {
  constructor(
    @InjectModel(Text.name) private textModel: Model<TextDocument>,
    @InjectModel(Grade.name) private gradeModel: Model<GradeDocument>,
  ) {}

  async create(createTextDto: CreateTextDto) {
    const createText = new this.textModel(createTextDto);
    return createText.save();
  }

  async findRandomText() {
    const grade = this.getRandomGrade(1, 100);
    const condition = await this.gradeModel
      .findOne({ textGrade: grade })
      .exec();

    return this.textModel.aggregate([
      {
        $project: {
          _id: 0,
          content: '$content',
          title: '$title',
          like: '$like',
          bad: '$bad',
          grade: grade,
          sub: {
            $subtract: ['$like', '$bad'],
          },
        },
      },
      { $sample: { size: 10 } },
      { $match: { sub: { $gt: condition['minLike'], $lt: condition['maxLike'] } } },
    ]);
  }

  getRandomGrade(min, max): string {
    const num = Math.floor(Math.random() * (max - min + 1) + min);

    if (num <= 5) return 'Legend';
    else if (num <= 25) return 'Epic';
    else if (num <= 65) return 'Rare';
    else return 'Normal';
  }
}
