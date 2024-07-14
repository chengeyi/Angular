import { Component } from '@angular/core';

//當作一個服務
import { HttpClient, HttpHeaders } from '@angular/common/http';

//使用服務
import {HttpserviceService} from '../../services/httpservice.service';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.scss'
})
export class LifecycleComponent {
  public msg:string = '我是一個生命週期演示';

  public info:string = '';

  constructor(public http:HttpClient, public httpservice:HttpserviceService) {
    console.log('00--構造函數執行了 -- 除了使用簡單的值對局部變數進行初始化之外 什麼都不應該做')
  }

  ngOnChanges() {
    console.log('01ngOnChanges執行了 --當被綁定的輸入屬性的值發生變化時調用（父子組件傳遞值的時候會觸發）')
  }

  ngOnInit() {
    console.log('02ngOnInit執行了 --請求數據一般在放在這裡面')
  }

  ngDoCheck() {
    console.log('03ngDoCheck執行了 --檢測 並且在Ａngular無法或不願意自己檢測的變出時做出反應')
    console.log(this.info)
  }

  ngAfterContentInit() {
    console.log('04ngAfterContentInit執行了 --當把內容投影進去組件之後調用')
  }

  ngAfterContentChecked() {
    console.log('05ngAfterContentChecked執行了 --每次完成被投影組件內容變更檢測後調用')
    console.log(this.info)
  }

  ngAfterViewInit():void {
    console.log('06ngAfterViewInit執行了 --初始化組件視圖及其子視圖之後調用（dom操作放在這裡）')
  }

  ngAfterViewChecked() {
    console.log('07ngAfterViewChecked執行了 --每次做完組件視圖和子視圖的變更檢測之後調用）')
    console.log(this.info)
  }

  ngOnDestory() {
    console.log('08ngOnDestory執行了 --）')
  }

  changeMsg() {
    this.msg = '改變了！！！！！'
  }

  getData() {
    let api = "http://a.itying.com/api/productlist";
    this.http.get(api).subscribe((response) => {
      console.log(response)
    })
  }

  doLogin() {
    HttpHeaders
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }

    let api = 'sss';
    this.http.post(api,{'userName':'AAA'},httpOptions).subscribe((res) => {
      console.log(res)
    })
  }

  getJsonData() {
    //jsonp請求 服務器必須支持jsonp

    let api = "http://a.itying.com/api/productlist";
    this.http.jsonp(api, 'callback').subscribe((response) => {
      console.log(response)
    })
  }

  

  getAxiosData() {
    let api = "http://a.itying.com/api/productlist";
    this.httpservice.getAxios(api).then((res:any) => {
      console.log(res)
    })
  }
}
