import { Module } from '@nestjs/common';
import { CredentialService } from './credential.service';
import { CredentialController } from './credential.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Credential } from '../db/entity/credential';

@Module({
  imports: [
    TypeOrmModule.forFeature([Credential]),
  ],
  controllers: [CredentialController],
  providers: [CredentialService]
})
export class CredentialModule {}
