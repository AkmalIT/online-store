import { IsNumber, IsString } from "class-validator"

export class CreateRatingDto{
    @IsString({message: "должно быть строкой"})
    readonly rate: string
    @IsNumber({}, {message: "должно быть числом"})
    readonly userId: number
    @IsNumber({}, {message: "должно быть числом"})
    readonly deviceId: number
}