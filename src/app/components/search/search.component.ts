import { Component, ViewChild } from '@angular/core';

//引入服務
import {StorageService} from '../../services/storage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  public keyWord:string = '';
  public historyList:any[] = [];

  //獲取ＤＯＭ節點
  @ViewChild('myBox') myBox:any;

   //獲取組件
  @ViewChild('header') header:any;

  constructor(public storage:StorageService) {
    // this.storage.get();
    // console.log(this.storage.get())
  }

  //組件和指令初始化完成 並不是真正的ＤＯＭ加載完成
  ngOnInit() {
    let serchList:any = localStorage.getItem('searchList');
    
    if(serchList) {
      this.historyList = JSON.parse(serchList) ;
    }
  }

  //視圖家載完成後觸發的方法 ＤＯＭ加載完成
  ngAfterViewInit():void {
    console.log(this.myBox)
    this.myBox.nativeElement.style.color = 'red';

    //調用子組件裡面的方法
    console.log(this.header.run())
    console.log(this.header.msg)
  }

  doSearch() {
    if(this.historyList.indexOf(this.keyWord) != -1) {
      alert('重複')
    }else {
      this.historyList.push(this.keyWord);
      this.keyWord = '';

      this.storage.set('searchList', this.historyList);
    }
    
  }

  del(idx:any) {
    console.log(idx)
    this.historyList.splice(idx,1)
  }
}
