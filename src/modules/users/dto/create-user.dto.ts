import {IsString, IsEmail, Length} from "class-validator"

export class CreateUserDto{
    @IsString({message: "должно быть строкой"})
    @IsEmail({}, {message: "некоректный email"})
    readonly email: string

    @IsString({message: "должно быть строкой"})
    @Length(4, 15, {message: "пароль не может быть меньше 4 и больше 15"})
    readonly password: string
}