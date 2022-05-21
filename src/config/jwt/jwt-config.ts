import 'dotenv-flow/config';

export class JwtConfig {
  static build() {
    return {
      secret: process.env.JWT_SECRET_KEY,
      signOptions: {
        expiresIn: process.env.EXPIRES_IN,
      },
    };
  }
}
