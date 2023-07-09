import {Table, Model,Column,DataType,ForeignKey,BelongsTo, HasMany} from "sequelize-typescript"
import { User } from "./user-model"
import { BasketDevice } from "./basket-device-model"




@Table({tableName: "basket"})
export class Basket extends Model<Basket>{
    @Column({type: DataType.INTEGER, primaryKey: true, autoIncrement: true})
    id: number

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number

    @BelongsTo(() => User)
    user: User

    @HasMany(() => BasketDevice)
    basketDevice: Basket
}