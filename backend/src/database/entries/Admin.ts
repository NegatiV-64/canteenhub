import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("admin")
export class Admin {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ unique: true })
    email!: string;

    @Column()
    password!: string;

    @Column({nullable: true})
    emailCode!: string;
}