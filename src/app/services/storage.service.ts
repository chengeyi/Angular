import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  set(key:any, val:any) {
    localStorage.setItem(key, JSON.stringify(val));
  }

  get(key:any) {
    let item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  remove(key:any) {
    localStorage.removeItem(key);
  }
}
