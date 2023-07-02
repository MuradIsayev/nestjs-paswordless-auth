import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Users {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ length: 256 })
  name: string;

  @Column({ length: 256 })
  email: string;
}

export default Users;
