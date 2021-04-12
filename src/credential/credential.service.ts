import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Credential } from '../db/entity/credential';
import { Repository } from 'typeorm';
import { CreateCredentialDto } from './dto/create.credential.dto';

/**
 * The Root Application Service
 */
@Injectable()
export class CredentialService {

  constructor(
    @InjectRepository(Credential)
    private readonly credentialRepo: Repository<Credential>
  ) {}

  public async getCredentials(): Promise<Credential[]> {
    // TODO: implement GraphQL functionality here
    return []
  }

  public async createCredential(dto: CreateCredentialDto): Promise<Credential> {
    const newCredential = new Credential();

    newCredential.connection_id = dto.connection_id;
    newCredential.created_at = dto.created_at;
    newCredential.credential_definition_id = dto.credential_definition_id;
    newCredential.credential_exchange_id = dto.credential_exchange_id;
    newCredential.credential_id = dto.credential_id;
    newCredential.is_revoked = dto.is_revoked;
    newCredential.revoc_reg_id = dto.revoc_reg_id;
    newCredential.revocation_date = dto.revocation_date;
    newCredential.revocation_id = dto.revocation_id;
    newCredential.revocation_reason = dto.revocation_reason;
    newCredential.schema_id = dto.schema_id;
    newCredential.state = dto.state;
    newCredential.thread_id = dto.thread_id;
    newCredential.updated_at = dto.updated_at;

    newCredential.entityData = dto.entityData;

    if ( "photo~attach" in newCredential.entityData ) {
      // TODO: store photo image in s3 compatible bucket
      newCredential.entityData.photoURL = 'photo.found.TODO.create.image.storage.backend';
      newCredential.entityData['photo~attach'] = null;
    }
    if ( "signature~attach" in newCredential.entityData ) {
      // TODO: store signature image in s3 compatible bucket
      newCredential.entityData.signatureURL = 'signature.found.TODO.create.image.storage.backend';
      newCredential.entityData['signature~attach'] = null;
    }

    // TODO: confirm that the return value has the id field populated
    return this.credentialRepo.save(newCredential);
  }

  public async revokeCredential(id: string, dto: CreateCredentialDto): Promise<Credential> {
    let revUpdate = {
      revocation_date: dto.revocation_date,
      revocation_id: dto.revocation_id,
      revocation_reason: dto.revocation_reason
    }

    this.credentialRepo.update(id, revUpdate);
    // TODO: confirm the update is successful and return the updated object to the frontend
    return null;
  }

  public async updateCredential(id: string, dto: CreateCredentialDto): Promise<Credential> {
    const newCredential = new Credential();

    newCredential.connection_id = dto.connection_id;
    newCredential.created_at = dto.created_at;
    newCredential.credential_definition_id = dto.credential_definition_id;
    newCredential.credential_exchange_id = dto.credential_exchange_id;
    newCredential.credential_id = dto.credential_id;
    newCredential.is_revoked = dto.is_revoked;
    newCredential.revoc_reg_id = dto.revoc_reg_id;
    newCredential.revocation_date = dto.revocation_date;
    newCredential.revocation_id = dto.revocation_id;
    newCredential.revocation_reason = dto.revocation_reason;
    newCredential.schema_id = dto.schema_id;
    newCredential.state = dto.state;
    newCredential.thread_id = dto.thread_id;
    newCredential.updated_at = dto.updated_at;

    newCredential.entityData = dto.entityData;

    if ( "photo~attach" in newCredential.entityData ) {
      // TODO: store photo image in s3 compatible bucket
      newCredential.entityData.photoURL = 'photo.found.TODO.create.image.storage.backend';
      newCredential.entityData['photo~attach'] = null;
    }
    if ( "signature~attach" in newCredential.entityData ) {
      // TODO: store signature image in s3 compatible bucket
      newCredential.entityData.signatureURL = 'signature.found.TODO.create.image.storage.backend';
      newCredential.entityData['signature~attach'] = null;
    }

    this.credentialRepo.update(id, newCredential);
    // TODO: confirm the update is successful and return the updated object to the frontend
    return null
  }

}
