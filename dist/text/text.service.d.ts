import { CreateTextDto } from './dto/create-text.dto';
import { GradeEntity } from '../grade/entities/grade.entity';
import { TextEntity } from './entities/text.entity';
import { Repository } from "typeorm";
export declare class TextService {
    private textRepository;
    private gradeRepository;
    constructor(textRepository: Repository<TextEntity>, gradeRepository: Repository<GradeEntity>);
    create({ title, content, like, bad }: CreateTextDto): Promise<TextEntity>;
    findRandomText(): Promise<any>;
    getRandomGrade(min: any, max: any): string;
}
