import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Record {

  @PrimaryColumn({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'integer' })
  age: number;
}
