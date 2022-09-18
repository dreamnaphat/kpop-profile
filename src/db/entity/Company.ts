import { 
    Entity, 
    BaseEntity, 
    Column, 
    PrimaryGeneratedColumn, 
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany
} from 'typeorm';

import { Idol } from './Idol';
import { Brand } from './Brand';
import { NameType } from '../../util/type'

@Entity('company')
export class Company extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    companyName!: string

    @Column({
        type: 'simple-json'
    })
    ceoName!: NameType

    @CreateDateColumn()
    foundingDate!: Date

    @OneToMany(
        () => Brand,
        brand => brand.company
    )
    brands!: Brand[]

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

}
