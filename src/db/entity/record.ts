import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { EmployeeCredentialDto } from 'record/dto/employee.credential.dto';
import { GovernmentCredentialDto } from 'record/dto/government.credential.dto';


  // TODO: add nullable: false where appropriate

@Entity()
export class Record {

  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'jsonb' })
  public entityData: EmployeeCredentialDto | GovernmentCredentialDto;

  @Column({ type: 'varchar', length: 100 })
  public connection_id: string;

  @Column({ type: 'varchar', length: 100 })
  public schema_id: string;

  @Column({ type: 'varchar', length: 100 })
  public credential_definition_id: string;

  @Column({ type: 'varchar', length: 100 })
  public credential_exchange_id: string;

  @Column({ type: 'varchar', length: 100 })
  public state: string;

  @Column({ type: 'varchar', length: 100, name: 'acapy_created_at' })
  public created_at: string;

  @Column({ type: 'varchar', length: 100 })
  public thread_id: string;

  @Column({ type: 'varchar', length: 100, name: 'acapy_updated_at' })
  public updated_at: string;

  @Column({ type: 'varchar', length: 100 })
  public revocation_id: string;

  @Column({ type: 'varchar', length: 100 })
  public credential_id: string;

  @Column({ type: 'varchar', length: 100 })
  public revoc_reg_id: string;

  @Column({ type: 'boolean' })
  public is_revoked: boolean;

  @Column({ type: 'varchar', length: 100})
  public revocation_reason: string;

  @Column({ type: 'varchar', length: 100})
  public revocation_date: string;

}