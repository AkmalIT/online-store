import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Brand } from 'src/common/models/brand-models';
import { CreateTypeDto } from '../types/dto/create-type.dto';

@Injectable()
export class BrandsService {
    constructor(@InjectModel(Brand) private brandModel: typeof Brand){}

    async create(dto: CreateTypeDto){
        return this.brandModel.create({...dto})
    }

    async getAll(){
        return this.brandModel.findAll()
    }
}
