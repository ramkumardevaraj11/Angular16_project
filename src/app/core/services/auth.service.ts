import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loggedIn = true; // mock: set to false to test redirect
  private userRole = 'admin'; // mock: change to 'user' or 'guest'

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  hasRole(roles: string[]): boolean {
    return roles.includes(this.userRole);
  }
}
