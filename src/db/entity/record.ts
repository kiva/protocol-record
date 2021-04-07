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

  @Column({ type: 'varchar' })
  public connection_id: string;

  @Column({ type: 'varchar' })
  public schema_id: string;

  @Column({ type: 'varchar' })
  public credential_definition_id: string;

  @Column({ type: 'varchar' })
  public credential_exchange_id: string;

  @Column({ type: 'varchar' })
  public state: string;

  @Column({ type: 'timestamptz', name: 'acapy_created_at' })
  public created_at: string;

  @Column({ type: 'varchar' })
  public thread_id: string;

  @Column({ type: 'timestamptz', name: 'acapy_updated_at' })
  public updated_at: string;

  @Column({ type: 'varchar' })
  public revocation_id: string;

  @Column({ type: 'varchar' })
  public credential_id: string;

  @Column({ type: 'varchar' })
  public revoc_reg_id: string;

  @Column({ type: 'boolean' })
  public is_revoked: boolean;

  @Column({ type: 'varchar' })
  public revocation_reason: string;

  @Column({ type: 'timestamptz' })
  public revocation_date: string;

}