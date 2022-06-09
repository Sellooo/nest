import { Module } from '@nestjs/common';
import { TextService } from './text.service';
import { TextController } from './text.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { TextSchema, Text } from "./entities/text.entity";
import { Grade, GradeSchema } from "../grade/entities/grade.entity";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Text.name, schema: TextSchema },
      { name: Grade.name, schema: GradeSchema },
    ]),
  ],
  controllers: [TextController],
  providers: [TextService],
})
export class TextModule {}
