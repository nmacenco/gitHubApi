import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GetApiInfoController } from './get-api-info/get-api-info.controller';

@Module({
  imports: [HttpModule],
  controllers: [AppController, GetApiInfoController],
  providers: [AppService],
})
export class AppModule {}
