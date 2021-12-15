import { ConfigService } from "@nestjs/config";
import configurationKeys from "src/config/app/configuration.keys";

const configService = new ConfigService();

export const encryptKey = configService.get<string>(configurationKeys.ENCRYPT_SECRET_KEY);