import { Component } from '@angular/core';
import {Router, NavigationExtras} from '@angular/router'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
  // 聲明屬性的幾種方式
  // public 共有（預設）可以在這個類（class）使用 也可以在類外面使用
  // protected 保護類型 他只有在當前類和子類裡面可以訪問
  // private 私有 只有在當前類可以使用

  public title = '我是一個新聞組件';

  msg = '我是一個新聞組件msg';

  userName:string = '我是人';

  // 推薦用
  public student:string = '我是學生';

  public message:any;

  public content = "<h2>我是一個ＨＴＭＬ標籤</h2>"
  
  public arr = [1, 2, 3];

  public list:string[] = ['1','2'];

  public list2:Array<any> = ['1','2'];
  
  public peopleInfo:any = {
    userName: '',
  }

  public listt:any[] = [];

  

  constructor(public router:Router) {
    this.message = '這是給屬性賦值'; 
    console.log(this.msg)
    this.msg = '改變後的msg';

    for(let i = 0; i < 10; i++) {
      this.listt.push(`這是第${i}條數據`)
    }
  }

  //動態傳值路由配置要用挖洞（：aid）
  goRouter() {
    let a = 'www'
    this.router.navigate(['/newscontent/', a])
  }

  //get傳值路由配置不用挖洞（：aid）
  getRouter() {
    let queryParams:NavigationExtras = {
      queryParams:{
        aid:123
      }
    }

    this.router.navigate(['/newscontent'], queryParams)
  }


}
