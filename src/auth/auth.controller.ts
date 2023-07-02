import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login() {
    // TODO: send magic link
  }

  @Post('login/callback')
  callback() {
    // TODO: generate JWT access token
  }


}
