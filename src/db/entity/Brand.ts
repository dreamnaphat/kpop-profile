import { 
    Entity, 
    BaseEntity, 
    Column, 
    PrimaryGeneratedColumn, 
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    OneToMany,
    JoinColumn
} from 'typeorm';

import { Company } from './Company'
import { Idol } from './Idol'
import { NameType } from '../../util/type'

@Entity('brand')
export class Brand extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number

    @Column({
        type: 'simple-json'
    })
    brandName!: NameType;

    @Column()
    fandomName!: string

    @Column()
    debutDate!: Date;
    
    @Column()
    numberOfMember!: number;

    @Column({
        default: false
    })
    isDisband!: boolean;

    @ManyToOne(
        () => Company,
        company => company.brands
    )
    @JoinColumn({
        name: 'companyId'
    })
    company!: Company

    @OneToMany(
        () => Idol,
        idol => idol.brand
    )
    idols!: Idol[]

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

}
