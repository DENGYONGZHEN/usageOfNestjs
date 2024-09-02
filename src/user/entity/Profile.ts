import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  detail: string;

  @OneToOne(() => User)
  user: User;
}
