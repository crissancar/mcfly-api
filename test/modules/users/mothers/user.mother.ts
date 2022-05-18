import { User } from '../../../../src/modules/users/models/user.model';
import { CreateUserRequest } from '../../../../src/modules/users/dtos/create-user-request.dto';
import { UuidMother } from '../../../shared/mothers/uuid.mother';
import { UsernameMother } from '../../../shared/mothers/username.mother';
import { EmailMother } from '../../../shared/mothers/email.mother';
import { WordMother } from '../../../shared/mothers/word.mother';

export class UserMother {
  static create(id: string, username: string, email: string, password: string) {
    return User.create(id, username, email, password);
  }

  static fromRequest(request: CreateUserRequest): User {
    return this.create(request.id, request.username, request.email, request.password);
  }

  static random(): User {
    return this.create(UuidMother.random(), UsernameMother.random(), EmailMother.random(), WordMother.random());
  }
}
