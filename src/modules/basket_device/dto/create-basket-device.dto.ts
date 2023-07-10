import { IsNumber } from "class-validator"

export class BasketDeviceDto{
    @IsNumber({}, {message: "должно быть числом"})
    readonly basketId: number
    @IsNumber({}, {message: "должно быть числом"})
    readonly deviceId: number
}