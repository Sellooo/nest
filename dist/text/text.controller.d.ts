import { TextService } from './text.service';
import { CreateTextDto } from './dto/create-text.dto';
export declare class TextController {
    private readonly textService;
    constructor(textService: TextService);
    create(createTextDto: CreateTextDto): Promise<import("./entities/text.entity").TextEntity>;
    hello(): string;
    findRandom(): Promise<import("./entities/text.entity").TextEntity>;
}
