import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { CreateTypeDto } from '../types/dto/create-type.dto';
import { Roles } from 'src/common/decorators/role-decorator';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { RolesGuard } from 'src/common/guards/role-guards';

@Controller('brands')
export class BrandsController {

    constructor(private brandService: BrandsService){}

    @Roles("ADMIN")
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Post()
    create(@Body() dto: CreateTypeDto){
        return this.brandService.create(dto)
    }

    @Get()
    getAll(){
        return this.brandService.getAll()
    }
}
