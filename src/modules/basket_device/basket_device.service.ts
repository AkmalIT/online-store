import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BasketDeviceDto } from './dto/create-basket-device.dto';
import { BasketDevice } from 'src/common/models/basket-device-model';

@Injectable()
export class BasketDeviceService {
    constructor(@InjectModel(BasketDevice) private basketDeviceModel: typeof BasketDevice){}

    async create(dto: BasketDeviceDto){
        const basketDevice = await this.basketDeviceModel.create({...dto})
        return basketDevice
    }
}
