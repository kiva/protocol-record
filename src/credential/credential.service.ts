import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Credential } from '../db/entity/credential';
import { Repository, EntityManager } from 'typeorm';
import { CreateCredentialDto } from './dto/create.credential.dto';
import { RevokeCredentialDto } from './dto/revoke.credential.dto';

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
    // For now this just returns all of the credentials (sans images to conserve bandwidth)
    return await this.credentialRepo.manager.find(Credential)
  }

  public async createCredential(dto: CreateCredentialDto): Promise<Credential> {
    const newCredential = new Credential();

    newCredential.connection_id = dto.connection_id;
    newCredential.created_at = dto.created_at;
    newCredential.credential_definition_id = dto.credential_definition_id;
    newCredential.credential_exchange_id = dto.credential_exchange_id;
    newCredential.credential_id = dto.credential_id;
    newCredential.revoc_reg_id = dto.revoc_reg_id;
    newCredential.schema_id = dto.schema_id;
    newCredential.state = dto.state;
    newCredential.thread_id = dto.thread_id;
    newCredential.updated_at = dto.updated_at;

    newCredential.entity_data = dto.entityData;

    if ( "photo~attach" in newCredential.entity_data ) {
      // TODO: store photo image in s3 compatible bucket
      newCredential.entity_data.photoURL = 'photo.found.TODO.create.image.storage.backend';
      newCredential.entity_data['photo~attach'] = null;
    }
    if ( "signature~attach" in newCredential.entity_data ) {
      // TODO: store signature image in s3 compatible bucket
      newCredential.entity_data.signatureURL = 'signature.found.TODO.create.image.storage.backend';
      newCredential.entity_data['signature~attach'] = null;
    }

    return this.credentialRepo.save(newCredential);
  }

  public async revokeCredential(id: number, dto: RevokeCredentialDto): Promise<Credential> {
    return this.credentialRepo.manager.transaction(async (entityManager: EntityManager) => {
      let cred: Credential = await entityManager.findOne(Credential, {id});
      if (!cred) {
        throw('Credential not found in database with id: ' + id)
      }
      cred.is_revoked = true;
      cred.revocation_date = dto.revocation_date;
      cred.revocation_id = dto.revocation_id;
      cred.revocation_reason = dto.revocation_reason;

      return entityManager.save(cred);
    });
  }

}
