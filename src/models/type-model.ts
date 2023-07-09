import {Table, Model,Column,DataType, HasMany, BelongsToMany} from "sequelize-typescript"
import { Device } from "./device-model"
import { Brand } from "./brand-models"
import { TypeBrand } from "./type-brand-model"




@Table({tableName: "type"})
export class Type extends Model<Type>{
    @Column({type: DataType.INTEGER, primaryKey: true, autoIncrement: true})
    id: number

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    name: string

    @HasMany(() => Device)
    device: Device

    @BelongsToMany(() => Brand , () => TypeBrand)
    brand: Brand
}