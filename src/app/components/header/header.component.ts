import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  public msg:string = '子組件msg'

  run() {
    console.log('呼叫子組件方法成功')
  }

  //接收父組件傳來的數據
  @Input() title:any;

  @Input() run2:any;

  @Input() home:any;
  
  getParentRun2() {
    this.run2();
    console.log(this.home)
  }

  
}
