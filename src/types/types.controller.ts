import { Body, Controller, Get, Post } from '@nestjs/common';
import { TypesService } from './types.service';
import { CreateTypeDto } from './dto/create-type.dto';

@Controller('types')
export class TypesController {
    constructor(private typeService: TypesService){}
    @Post()
    create(@Body() dto: CreateTypeDto){
        return this.typeService.create(dto)
    }

    @Get()
    getAll(){
        return this.typeService.getAll()
    }
}
