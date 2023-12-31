import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
import {plainToClass} from "class-transformer"
import { validate } from "class-validator";
import { ValidationException } from "../exceptions/validation-exceptions";

export class ValidationPipe implements PipeTransform{
    async transform(value: any, metadata: ArgumentMetadata) {
        const obj = plainToClass(metadata.metatype, value)
        const errors = await validate(obj)

        if(errors.length){
            let messages = await errors.map(err => {
                return `${err.property} - ${Object.values(err.constraints).join(', ')}`
            })

            throw new ValidationException(messages)
        }
        return value
    }
}