import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateDeviceDto } from './dto/create-device.dto';
import { Device } from 'src/common/models/device-model';
import { FilesService } from 'src/common/files/files.service';

@Injectable()
export class DeviceService {
    constructor(@InjectModel(Device) private deviceModel: typeof Device,
    private fileService: FilesService){}

    async createDevice(dto: CreateDeviceDto, image: any){
        const fileName = await this.fileService.createFile(image)
        const device  = await this.deviceModel.create({...dto, img: fileName})

        return device
    }

    async getAll(){
        return this.deviceModel.findAll({include: {all: true}})
    }

    async getOne(id){
        return this.deviceModel.findOne({where: {id}})
    }
}
