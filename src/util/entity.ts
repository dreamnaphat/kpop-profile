import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { NameType } from './type'

@Entity()
export class Person extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({
        type: 'simple-json'
    })
    birthName!: NameType;

    @Column({
        type: 'simple-json',
        nullable: true
    })
    stageName!: NameType;

    @Column()
    height!: number;

    @Column()
    weight!: number;

    @CreateDateColumn()
    birthDate!: Date;
    
    @Column()
    bloodType!: string;

}
