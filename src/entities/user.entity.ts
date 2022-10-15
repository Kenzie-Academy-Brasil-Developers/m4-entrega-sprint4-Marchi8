import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity("users")
export class User {
    @Column({ length: 60 })
    name: string;

    @Column({ length: 80, unique: true })
    email: string;

    @Column({ length: 60 })
    password: string;

    @Column()
    isAdm: boolean;

    @Column({ default: true })
    isActive: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @PrimaryGeneratedColumn("uuid")
    readonly id: string;
}