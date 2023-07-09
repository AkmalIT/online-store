import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BasketDevice } from 'src/models/basket-device-model';
import { BasketDeviceDto } from './dto/create-basket-device.dto';

@Injectable()
export class BasketDeviceService {
    constructor(@InjectModel(BasketDevice) private basketDeviceModel: typeof BasketDevice){}

    async create(dto: BasketDeviceDto){
        const basketDevice = await this.basketDeviceModel.create({...dto})
        return basketDevice
    }
}
