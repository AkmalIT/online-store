import { Controller, Post, Body, Get, Req } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService){}

    @Post('/registration')
    registration(@Body() dto: CreateUserDto){
        try{
            return this.userService.registration(dto)
        }
        catch(e){
            console.log(e); 
        }
    }

    @Post('/login')
    login(@Body() dto: CreateUserDto){
        return this.userService.login(dto)
    }

    @Get()
    getAll(){
        return this.userService.getAll()
    }
}
