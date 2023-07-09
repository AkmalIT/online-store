import { Body, Controller, Post, UploadedFile, UseInterceptors, Get, Param } from '@nestjs/common';
import { CreateDeviceDto } from './dto/create-device.dto';
import { DeviceService } from './device.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('device')
export class DeviceController {
    constructor(private deviceService: DeviceService){}

    @UseInterceptors(FileInterceptor("image"))
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
