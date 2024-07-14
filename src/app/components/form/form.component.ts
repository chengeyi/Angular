import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  public peopleInfo:any = {
    userName: '',
    sex: '1',
    cityList:['台北', '新北'],
    city: '新北',
    hobby:[
      {
        title: '吃飯',
        checked: false
      },
      {
        title: '睡覺',
        checked: true
      },
    ]
  }
  doSubmit() {
    console.log(this.peopleInfo)
  }
}
