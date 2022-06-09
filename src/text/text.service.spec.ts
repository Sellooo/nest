import { Test, TestingModule } from '@nestjs/testing';
import { TextService } from './text.service';
import { CreateTextDto } from "./dto/create-text.dto";
import { TextModule } from "./text.module";

describe('TextService', () => {
  let service: TextService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TextModule],
    }).compile();

    service = module.get<TextService>(TextService);
  });

  it('should be defined', () => {
    const text = service.create(new CreateTextDto('test', 'test'));
    console.log(text);
  });
});
