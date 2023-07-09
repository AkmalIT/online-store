import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTypeDto } from './dto/create-type.dto';
import { Type } from 'src/common/models/type-model';

@Injectable()
export class TypesService {
    constructor(@InjectModel(Type) private typeModel: typeof Type){}
    
    async create(dto: CreateTypeDto){
        return this.typeModel.create({...dto})
    }

    async getAll(){
        return this.typeModel.findAll()
    }
}
