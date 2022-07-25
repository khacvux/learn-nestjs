import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signin() {
    return { msg: 'i have signin' };
  }

  signup() {
    return { msg: 'i have signup' };
  }
}
