import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() //1. This class is a Database table
export class User {
  @PrimaryGeneratedColumn() //2. This is the ID. Auto INCREMENT IT (1,2,3....)
  id: number;

  @Column() //3. This is a normal coloumn
  name: string;

  @Column({ unique: true }) //4. NO DUPLICTAS ALLOWED
  email: string;

  @Column({ default: true }) //5. If not specifiied, set to "true"
  isActive: boolean;
}
