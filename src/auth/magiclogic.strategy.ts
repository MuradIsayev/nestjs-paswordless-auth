import { Injectable, Logger } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import Strategy from 'passport-magic-login';
import { AuthService } from './auth.service';

@Injectable()
export class MagicLoginStrategy extends PassportStrategy(Strategy) {
  private readonly logger = new Logger(MagicLoginStrategy.name);
  constructor(private readonly authService: AuthService) {
    super({
      secret: process.env.MAGIC_SECRET,
      jwtOptions: {
        expiresIn: '5m',
      },
      callbackURL: process.env.MAGIC_CALLBACK_URL,
      sendMagicLink: (destination, href) => {
        // TODO: send email
        this.logger.debug(
          `Sending magic link to ${destination} with href ${href}`,
        );
      },
      verify: async (payload, callback) => {
        callback(null, this.validate(payload));
      },
    });
  }
  validate(payload) {
    const user = this.authService.validateUser(payload.destination);

    return user;
  }
}
