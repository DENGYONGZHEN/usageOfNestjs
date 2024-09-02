import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Profile } from './Profile';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({ default: 'deng@mail.com' })
  email: string;

  @Column({ default: new Date().toLocaleDateString(), type: 'timestamp' })
  cratedAt: Date;

  @Column({ nullable: true })
  password: string;

  @OneToOne(() => Profile)
  @JoinColumn()
  profile: Profile;
}
