import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller('get-api-info')
export class GetApiInfoController {
    constructor(private readonly appService : AppService) {}
    @Get(':username') 
    getApiInfo (@Param() params){
        return this.appService.getInfo(params);
    }
}

