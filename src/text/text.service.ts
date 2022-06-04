import { Injectable } from '@nestjs/common';
import { CreateTextDto } from './dto/create-text.dto';
import { UpdateTextDto } from './dto/update-text.dto';
import { InjectModel } from "@nestjs/mongoose";
import { TextDocument, Text } from "./entities/text.entity";
import { Model } from "mongoose";

@Injectable()
export class TextService {
  constructor(@InjectModel(Text.name) private textModel: Model<TextDocument>) {}

  async create(createTextDto: CreateTextDto) {
    const createText = new this.textModel(createTextDto);
    return createText.save();
  }

  async findAll(): Promise<Text[]> {
    return this.textModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} text`;
  }

  update(id: number, updateTextDto: UpdateTextDto) {
    return `This action updates a #${id} text`;
  }

  remove(id: number) {
    return `This action removes a #${id} text`;
  }
}
