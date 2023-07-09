import {Table, Model,Column,DataType,ForeignKey, BelongsTo,HasMany} from "sequelize-typescript"
import { Type } from "./type-model"
import { Brand } from "./brand-models"
import { Rating } from "./rating-model"
import { BasketDevice } from "./basket-device-model"
import { DeviceInfo } from "./device-info-model"


interface DeviceCreationAttrs{
    name: string
    price: number
    rating: number
    img: string
}

@Table({tableName: "device"})
export class Device extends Model<Device, DeviceCreationAttrs>{
    @Column({type: DataType.INTEGER, primaryKey: true, autoIncrement: true})
    id: number

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    name: string

    @Column({type: DataType.INTEGER, allowNull: false})
    price: number

    @Column({type: DataType.INTEGER, defaultValue: 0})
    rating: number

    @Column({type: DataType.STRING, allowNull: false})
    img: string

    @ForeignKey(() => Type)
    @Column({type: DataType.INTEGER})
    typeId: number

    @ForeignKey(() => Brand)
    @Column({type: DataType.INTEGER})
    brandId: number

    @BelongsTo(() => Type)
    type: Type

    @BelongsTo(() => Brand)
    brand: Brand

    @HasMany(() => Rating)
    rate: Rating

    @HasMany(() => BasketDevice)
    basket_device: BasketDevice

    @HasMany(() => DeviceInfo)
    device_info: DeviceInfo
}