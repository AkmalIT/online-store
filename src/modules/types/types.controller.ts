import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { TypesService } from './types.service';
import { CreateTypeDto } from './dto/create-type.dto';
 import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { RolesGuard } from 'src/common/guards/role-guards';
import { Roles } from 'src/common/decorators/role-decorator';

@Controller('types')
export class TypesController {
    constructor(private typeService: TypesService){}

    @Roles("ADMIN")
    @UseGuards(JwtAuthGuard,RolesGuard)
    @Post()
    create(@Body() dto: CreateTypeDto){
        return this.typeService.create(dto)
    }

    @Get()
    getAll(){
        return this.typeService.getAll()
    }
}
