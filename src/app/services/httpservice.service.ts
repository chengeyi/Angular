import { Injectable } from '@angular/core';

import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor() { }

  getAxios(api:any) {
    return new Promise((resolve, reject) => {
      axios.get(api).then((res) => {
        // console.log(res)
        resolve(res)
      })
    })
    
  }
}
