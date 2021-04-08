import { EmployeeCredentialDto } from "./employee.credential.dto";
import { GovernmentCredentialDto } from "./government.credential.dto";

export class CreateCredentialDto {
  entityData: EmployeeCredentialDto | GovernmentCredentialDto;
  connection_id: string;
  schema_id: string;
  credential_definition_id: string;
  credential_exchange_id: string;
  state: string;
  created_at: Date;
  thread_id: string;
  updated_at: Date;
  revocation_id: string;
  credential_id: string;
  revoc_reg_id: string;
  is_revoked: boolean;
  revocation_reason: string;
  revocation_date: Date;
}
