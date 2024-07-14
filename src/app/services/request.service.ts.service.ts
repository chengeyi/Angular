import { Injectable } from '@angular/core';

import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class RequestServiceTsService {

  constructor() { }

  //同步
  getData() {
    return 'this is service data'
  }

  //非同步
  // getCallbackData() {
  //   setTimeout(() => {
  //     let data = '張三';
  //     return data;
  //   },1000)
  // }

  getRxjsData() {
    return new Observable((observer) => {
        setTimeout(() => {
            let data2 = '張三';
            observer.next(data2);
            // observer.error('失敗');
        }, 2000);
    });
}
}
