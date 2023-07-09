import { Body, Controller, Post } from '@nestjs/common';
import { DeviceInfoService } from './device-info.service';
import { CreateInfoDto } from './dto/create-info.dto';

@Controller('device-info')
export class DeviceInfoController {
    constructor(private deviceInfoService: DeviceInfoService){}
    @Post()
    createInfo(@Body() dto: CreateInfoDto){
        return this.deviceInfoService.create(dto)
    }
}
