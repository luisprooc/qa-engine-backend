import * as argon2 from 'argon2';
import { encryptKey } from 'src/common/constants/encrypt/encrypt-secret.constants';

const encryptOptions = {
  saltLength: 16,
  hashLength: 16,
  secret: Buffer.from(encryptKey)
}

export const encryptPassword = (password: string) => {
  return argon2.hash(password, encryptOptions);
}

export const verifyPassword = (hash: string , password: string) => {
  return argon2.verify(hash, password);
}