import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Type } from 'src/models/type-model';
import { CreateTypeDto } from './dto/create-type.dto';

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
