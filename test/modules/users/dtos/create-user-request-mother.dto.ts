import { CreateUserRequest } from 'src/modules/users/dtos/create-user-request.dto';
import { UuidMother } from '../../../shared/mothers/uuid.mother';
import { UsernameMother } from '../../../shared/mothers/username.mother';
import { EmailMother } from '../../../shared/mothers/email.mother';
import { WordMother } from '../../../shared/mothers/word.mother';

export class CreateUserRequestMother {
  static create(id: string, username: string, email: string, password: string) {
    return {
      id: id,
      username: username,
      email: email,
      password: password,
    };
  }

  static random(): CreateUserRequest {
    return this.create(UuidMother.random(), UsernameMother.random(), EmailMother.random(), WordMother.random());
  }
}
