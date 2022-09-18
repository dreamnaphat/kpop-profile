import { Entity, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Person } from '../../util/entity'
import { Brand } from './Brand';

@Entity('idol')
export class Idol extends Person {

    @Column({
        type: 'simple-array'
    })
    position!: string[];

    @ManyToOne(
        () => Brand,
        brand => brand.idols
    )
    @JoinColumn({
        name: 'brandId'
    })
    brand!: Brand

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

}
