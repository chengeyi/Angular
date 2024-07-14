import { Component } from '@angular/core';

import {RequestServiceTsService} from '../../services/request.service.ts.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(public request:RequestServiceTsService) {

  }

  ngOnInit() {
    // let data = this.request.getData();
    // console.log(data)

    //rxjs獲取異步方法裡面的數據
    let rxjsData = this.request.getRxjsData();
    rxjsData.subscribe((data2) => {
      console.log(data2)
    })

  }

  getRex() {
    let rxjsData = this.request.getRxjsData();
    rxjsData.subscribe({
        next: (data2) => {
            console.log(data2);
        },
        error: (error) => {
            console.error('Error:', error);
        },
        complete: () => {
            console.log('Completed');
        }
    });
  }

  public list:any[] = [
    {
      title: 'aaa'
    },
    {
      title: 'bbb'
    },
  ]

  public flag:boolean = true;

  public orderStatus:number = 1;

  public atttr:string = 'red';

  public today:any = new Date();

  public title:string = 'title';
  run() {
    alert('執行')
  }

  getData() {
    alert(this.title)
  }

  setData() {
    this.title = 'title2'
  }

  keydown(e:any) {
    console.log(e)
  }

  public keyWord:string = 'keyWord';

  public pageTitle:string = '我是首頁的標題'; 

  run2() {
    alert('我是父組件的run2方法')
  }

  

  
}
