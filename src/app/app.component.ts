// 引入核心模塊裡面的 Component
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // 使用這個組件的名稱
  templateUrl: './app.component.html', // html
  styleUrl: './app.component.scss' // css
})
export class AppComponent {
  title = 'Angular01'; // 定義屬性
}
