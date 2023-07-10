import { Body, Controller, Post, UploadedFile, UseInterceptors, Get, Param, UseGuards } from '@nestjs/common';
import { CreateDeviceDto } from './dto/create-device.dto';
import { DeviceService } from './device.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Roles } from 'src/common/decorators/role-decorator';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { RolesGuard } from 'src/common/guards/role-guards';

@Controller('device')
export class DeviceController {
    constructor(private deviceService: DeviceService){}

    @UseInterceptors(FileInterceptor("image"))
    @Roles("ADMIN")
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Post()
    createDevice(@Body() dto: CreateDeviceDto, @UploadedFile() image){
        return this.deviceService.createDevice(dto, image)
    }

    @Get()
    getAll(){
        return this.deviceService.getAll()
    }

    @Get('/:id')
    getOne(@Param('id') id: number){
        return this.deviceService.getOne(id)
    }
}
