import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateInfoDto } from './dto/create-info.dto';
import { DeviceInfo } from 'src/common/models/device-info-model';

@Injectable()
export class DeviceInfoService {
    constructor(@InjectModel(DeviceInfo) private deviceInfoModel: typeof DeviceInfo){}

    async create(dto: CreateInfoDto){
        return this.deviceInfoModel.create({...dto})
    }
}
