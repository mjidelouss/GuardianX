import { Injectable } from '@angular/core';
import { UserModel } from '../_models/user.model';

const USER_KEY = 'authenticated-user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  
  saveUser(user : UserModel){
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  getSavedUser() : UserModel | null {
    const user = window.localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }

  clean(): void {
    window.localStorage.clear();
  }
}
