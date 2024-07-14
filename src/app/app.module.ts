// 此文件是Angular 根模塊 告訴Angular如何組裝應用

// Ａngular 核心模塊
import { NgModule } from '@angular/core';
// 瀏覽器解析的模塊
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

//引入Http
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
//根組件
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { SearchComponent } from './components/search/search.component';
import { TodolistComponent } from './components/todolist/todolist.component';

//引入並配置服務
import {StorageService} from './services/storage.service';
import {HttpserviceService} from './services/httpservice.service';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { NewscontentComponent } from './components/newscontent/newscontent.component';

@NgModule({
  declarations: [ //配置當前項目運行的組件
    AppComponent, NewsComponent, HomeComponent, HeaderComponent, FormComponent, SearchComponent, TodolistComponent, LifecycleComponent, NewscontentComponent, 
  ],
  imports: [ //配置當前模塊運行依賴的其他模塊
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [StorageService, HttpserviceService], //配置項目所需服務
  bootstrap: [AppComponent] //指定應用的主視圖（根組件）通過引導根AppModule來啟動應用
})
// 根模塊不需要導出任何東西 因為其他組建不需要導入根模塊
export class AppModule { }
