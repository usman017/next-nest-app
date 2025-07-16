import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  findAll() {
    const users = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'William Smith' },
    ];
    return users;
  }
}
