import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { DeviceInfoService } from './device-info.service';
import { CreateInfoDto } from './dto/create-info.dto';
import { Roles } from 'src/common/decorators/role-decorator';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { RolesGuard } from 'src/common/guards/role-guards';

@Controller('device-info')
export class DeviceInfoController {
    constructor(private deviceInfoService: DeviceInfoService){}

    @Roles("ADMIN")
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Post()
    createInfo(@Body() dto: CreateInfoDto){
        return this.deviceInfoService.create(dto)
    }
}
