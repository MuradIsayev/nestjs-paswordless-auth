import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ length: 256 })
  name: string;

  @Column({ length: 256 })
  email: string;
}
