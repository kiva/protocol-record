import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Person {

  @PrimaryColumn({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'integer' })
  age: number;
}
