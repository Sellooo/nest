import { Module } from '@nestjs/common';
import { TextService } from './text.service';
import { TextController } from './text.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TextEntity } from "./entities/text.entity";
import { GradeEntity } from 'src/grade/entities/grade.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([TextEntity, GradeEntity]),
  ],
  controllers: [TextController],
  providers: [TextService],
})
export class TextModule {}
