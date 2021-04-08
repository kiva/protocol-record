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
    // TODO: transcribe all fields to newCredential (filter the entityData for large objects and store them in large object storage)
    return this.credentialRepo.save(newCredential);
  }

  public async updateCredential(id: string, dto: CreateCredentialDto): Promise<Credential> {
    const newCredential = new Credential();
    // TODO: transcribe all fields to newCredential
    // TODO: change save to update
    this.credentialRepo.update(id, newCredential);
    // TODO: confirm the update is successful and return the updated object to the frontend
    return null
  }

}
