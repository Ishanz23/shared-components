import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'platform',
})
export class UserService {
  private user = signal('default');

  setUser(user = 'default') {
    this.user.update((username) => user);
  }

  getUser() {
    return this.user;
  }
}

export const user = new UserService();
