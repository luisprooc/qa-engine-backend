import { ConfigService } from '@nestjs/config';
import configurationKeys from '../../config/app/configuration.keys';

const configService  = new ConfigService()
export const jwtSecret = configService.get<string>(configurationKeys.JWT_SECRET_KEY);