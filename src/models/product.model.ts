import { Exclude, Expose } from "class-transformer";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'products' })
export class Product {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    price: number

    @Exclude()
    @CreateDateColumn()
    created_at: Date

    @Expose()
    get namePrice(){
        return this.name + " - " + this.price;
    }

}
