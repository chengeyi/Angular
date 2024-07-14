import { Component } from '@angular/core';

//引入服務
import {StorageService} from '../../services/storage.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.scss'
})
export class TodolistComponent {
  public keyWord:string = '';
  public todoList:any[] = [];

  constructor(public storage:StorageService) {
    // this.storage.get();
    // console.log(this.storage.get())
  }
  
  doAdd(e:any) {
    if(e.keyCode == 13) {
      console.log(this.todolistHasKeyword())
      if(this.todolistHasKeyword()) {
        this.todoList.push({
          title: this.keyWord,
          stayus:0
        });
      }
     
      this.keyWord = '';
    }
  }

  del(idx:any) {
    this.todoList.splice(idx, 1)
  }

  todolistHasKeyword() {
    let exist = false;
    this.todoList.forEach(val => {
       if(val.title === this.keyWord) {
        exist = true;
      }
    })
    if(exist) {
      return false;
    }else {
      return true;
    }
  }
}
