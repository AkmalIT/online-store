import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import {JwtService} from "@nestjs/jwt"
import * as bcrypt from "bcrypt"
import { User } from 'src/common/models/user-model';
import { Basket } from 'src/common/models/basket-model';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userModel: typeof User,
     @InjectModel(Basket) private basketModel: typeof Basket,
     private jwtService: JwtService){}

     async registration(dto: CreateUserDto){
        try{

            const condidate = await this.getUserByEmail(dto.email)
            if(condidate){
                throw new HttpException("Пользователь с таким email существует", HttpStatus.BAD_REQUEST)
            }
            const hashPassword = await bcrypt.hash(dto.password, 5)
            const user = await this.userModel.create({...dto, password: hashPassword})
            const basket = await this.basketModel.create({userId: user.id})
            return this.generateToken(user)
        }
        catch(e){
            console.log(e);
            
        }
     }

     async login(dto: CreateUserDto){
        const user = await this.validateUser(dto)
        return this.generateToken(user)
     }

     async getAll(){
        const user = await this.userModel.findAll()
        return user
     }


     private async getUserByEmail(email){
        const user = await this.userModel.findOne({where: {email}})
        return user
     }

     private async generateToken(user: User){
        const payload = {id: user.id, email: user.email, roles: user.role}
        return {
            token: this.jwtService.sign(payload)
        }
    }

    private async validateUser(dto: CreateUserDto){
        const user = await this.getUserByEmail(dto.email)
        const password = await bcrypt.compare(dto.password, user.password)
        if(user && password){
            return user
        }
        throw new UnauthorizedException({message: 'Некорректный email или пароль'})
    }
}
