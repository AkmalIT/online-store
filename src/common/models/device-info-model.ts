import {Table, Model,Column,DataType,ForeignKey, BelongsTo} from "sequelize-typescript"
import { Device } from "./device-model"

interface DeviceInfoCreationAttrs{
    title: string
    description: string
    deviceId: number
}


@Table({tableName: "device_info"})
export class DeviceInfo extends Model<DeviceInfo, DeviceInfoCreationAttrs>{
    @Column({type: DataType.INTEGER, primaryKey: true, autoIncrement: true})
    id: number

    @Column({type: DataType.STRING, allowNull: false})
    title: string

    @Column({type: DataType.STRING, allowNull: false})
    description: string

    @ForeignKey(() => Device)
    @Column({type: DataType.INTEGER})
    deviceId: number

    @BelongsTo(() => Device)
    device: Device
}