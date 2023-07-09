import {Table, Model,Column,DataType,HasMany, BelongsToMany} from "sequelize-typescript"
import { Device } from "./device-model"
import { Type } from "./type-model"
import { TypeBrand } from "./type-brand-model"




@Table({tableName: "brand"})
export class Brand extends Model<Brand>{
    @Column({type: DataType.INTEGER, primaryKey: true, autoIncrement: true})
    id: number

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    name: string

    @HasMany(() => Device)
    device: Device

    @BelongsToMany(() => Type , () => TypeBrand)
    type: Type
}