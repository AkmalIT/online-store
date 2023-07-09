import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DeviceInfo } from 'src/models/device-info-model';
import { CreateInfoDto } from './dto/create-info.dto';

@Injectable()
export class DeviceInfoService {
    constructor(@InjectModel(DeviceInfo) private deviceInfoModel: typeof DeviceInfo){}

    async create(dto: CreateInfoDto){
        return this.deviceInfoModel.create({...dto})
    }
}
