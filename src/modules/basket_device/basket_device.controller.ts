import { Body, Controller, Post } from '@nestjs/common';
import { BasketDeviceDto } from './dto/create-basket-device.dto';
import { BasketDeviceService } from './basket_device.service';

@Controller('basket-device')
export class BasketDeviceController {

    constructor(private basketDeviceService: BasketDeviceService){}

    @Post()
    create(@Body() dto: BasketDeviceDto){
        return this.basketDeviceService.create(dto)
    }
}
