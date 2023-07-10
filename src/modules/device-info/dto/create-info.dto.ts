import { IsNumber, IsString } from "class-validator"

export class CreateInfoDto{
    @IsString({message: "должно быть строкой"})
    readonly title: string
    @IsString({message: "должно быть строкой"})
    readonly description: string
    @IsNumber({}, {message: "должно быть числом"})
    readonly deviceId: number
}