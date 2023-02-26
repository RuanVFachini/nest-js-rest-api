import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("cats")
export class Cat {
    @PrimaryColumn() 
    id: number;

    @Column()
    name: string;
}