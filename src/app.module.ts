import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { TextModule } from './text/text.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://syh:1234@lvm.cx3cn5z.mongodb.net/?retryWrites=true&w=majority'),
    TextModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
