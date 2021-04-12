import { Get, Controller, Param, Post, Body } from '@nestjs/common';
import { CredentialService } from './credential.service';
import { Credential } from '../db/entity/credential';
import { CreateCredentialDto } from './dto/create.credential.dto';

/**
 * Base route is just for various health check endpoints
 */
@Controller('credential')
export class CredentialController {

  constructor(private readonly credentialService: CredentialService) {}

  @Get()
  getCredentials(): Promise<Credential[]> {
    return this.credentialService.getCredentials();
  }

  @Post()
  createCredential(@Body() createCredentialDto: CreateCredentialDto): Promise<Credential> {
    return this.credentialService.createCredential(createCredentialDto);
  }

  @Post(':id')
  updateCredential(@Param('id') id: string, @Body() createCredentialDto: CreateCredentialDto): Promise<Credential> {
    return this.credentialService.updateCredential(id, createCredentialDto);
  }

  // Note: CreateCredentialDto is used here but only the revocation specific fields are required and used by this method.
  @Post('revoke/:id')
  revokeCredential(@Param('id') id: string, @Body() revokeCredentialDto: CreateCredentialDto): Promise<Credential> {
    return this.credentialService.revokeCredential(id, revokeCredentialDto);
  }

}
