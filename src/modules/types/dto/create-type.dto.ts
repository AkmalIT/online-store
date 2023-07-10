import { IsString } from "class-validator";

export class CreateTypeDto{
    @IsString({message: "должно быть строкой"})
    name: string
}