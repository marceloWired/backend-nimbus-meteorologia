import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Weather {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  city: string

  @Column()
  district: string

  @Column()
  milimeters: number

  @Column()
  subtitle: string

  @Column()
  date: Date

  @Column()
  hour: string
}
