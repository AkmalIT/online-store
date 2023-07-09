import {Table, Model,Column,DataType,ForeignKey,BelongsTo} from "sequelize-typescript"
import { User } from "./user-model"
import { Device } from "./device-model"




@Table({tableName: "rating"})
export class Rating extends Model<Rating>{
    @Column({type: DataType.INTEGER, primaryKey: true, autoIncrement: true})
    id: number

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    rate: string

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number

    @ForeignKey(() => Device)
    @Column({type: DataType.INTEGER})
    deviceId: number

    @BelongsTo(() => User)
    user: User

    @BelongsTo(() => Device)
    device: Device
}