import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { BasketDeviceDto } from './dto/create-basket-device.dto';
import { BasketDeviceService } from './basket_device.service';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';

@Controller('basket-device')
export class BasketDeviceController {

    constructor(private basketDeviceService: BasketDeviceService){}

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() dto: BasketDeviceDto){
        return this.basketDeviceService.create(dto)
    }
}
