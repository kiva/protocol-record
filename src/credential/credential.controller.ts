import { Get, Controller, Param, Post, Body, Request } from '@nestjs/common';
import { Request as ExpressRequest } from 'express';
import jwt from 'express-jwt';
import { ProtocolException } from 'protocol-common/protocol.exception';
import { ProtocolErrorCode } from 'protocol-common/protocol.errorcode';
import { CredentialService } from './credential.service';
import { Credential } from '../db/entity/credential';
import { CreateCredentialDto } from './dto/create.credential.dto';
import { RevokeCredentialDto } from './dto/revoke.credential.dto';

/**
 * Base route is just for various health check endpoints
 */
@Controller('credential')
export class CredentialController {

  constructor(private readonly credentialService: CredentialService) {}

  @Get()
  getCredentials(@Request() req: ExpressRequest): Promise<Credential[]> {
    return this.credentialService.getCredentials(this.extractInstitution(req));
  }

  extractInstitution(req: ExpressRequest): string {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        throw new ProtocolException(ProtocolErrorCode.FORBIDDEN_EXCEPTION, 'InstitutionGuard: No auth header', null, 403);
    }

    const token = authHeader.slice(7, authHeader.length);
    if (!token) {
        throw new ProtocolException(ProtocolErrorCode.FORBIDDEN_EXCEPTION, 'InstitutionGuard: No token in auth header', null, 403);
    }

    let metaData;
    try {
        metaData = jwt.decode(token);
        if (!metaData) {
            throw new Error();
        }
    } catch (e) {
        throw new ProtocolException(ProtocolErrorCode.FORBIDDEN_EXCEPTION, 'InstitutionGuard: Failed to decode JWT', null, 403);
    }

    const institution: string = metaData['https://ekyc.sl.kiva.org/institution'];
    if (!institution) {
        throw new ProtocolException(ProtocolErrorCode.FORBIDDEN_EXCEPTION, 'InstitutionGuard: No institution in token metadata', null, 403);
    }
    return institution.toLowerCase();
  }

  @Post()
  createCredential(@Body() createCredentialDto: CreateCredentialDto): Promise<Credential> {
    return this.credentialService.createCredential(createCredentialDto);
  }

  // id = credential_exchange_id
  @Post('revoke/:id')
  revokeCredential(@Param('id') id: string, @Body() revokeCredentialDto: RevokeCredentialDto): Promise<Credential> {
    return this.credentialService.revokeCredential(id, revokeCredentialDto);
  }

}
