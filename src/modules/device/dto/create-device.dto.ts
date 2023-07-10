import { IsNumber, IsString } from "class-validator"

export class CreateDeviceDto{
    @IsString({message: "должно быть строкой"})
    name: string
    @IsNumber({}, {message: "должно быть числом"})
    price: number
    @IsNumber({}, {message: "должно быть числом"})
    brandId: number
    @IsNumber({}, {message: "должно быть числом"})
    typeId: number
}