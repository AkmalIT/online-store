import {Table, Model,Column,DataType,ForeignKey,BelongsTo} from "sequelize-typescript"
import { Basket } from "./basket-model"
import { Device } from "./device-model"




@Table({tableName: "basket_device"})
export class BasketDevice extends Model<BasketDevice>{
    @Column({type: DataType.INTEGER, primaryKey: true, autoIncrement: true})
    id: number

    @ForeignKey(() => Basket)
    @Column({type: DataType.INTEGER})
    basketId: number

    @ForeignKey(() => Device)
    @Column({type: DataType.INTEGER})
    deviceId: number

    @BelongsTo(() => Basket)
    basket: Basket

    @BelongsTo(() => Device)
    device: Device
}