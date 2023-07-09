import {Table, Model,Column,DataType,HasOne,HasMany} from "sequelize-typescript"
import { Basket } from "./basket-model"
import { Rating } from "./rating-model"


interface UserCreationAttrs{
    email: string
    password: string
    role: string
}

@Table({tableName: "users"})
export class User extends Model<User, UserCreationAttrs>{
    @Column({type: DataType.INTEGER, primaryKey: true, autoIncrement: true})
    id: number

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string

    @Column({type: DataType.STRING, allowNull: false})
    password: string

    @Column({type: DataType.STRING, defaultValue: "USER"})
    role: string

    @HasOne(() => Basket)
    basket: Basket

    @HasMany(() => Rating)
    rating: Rating
}