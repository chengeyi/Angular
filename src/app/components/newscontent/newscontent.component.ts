import { Component } from '@angular/core';

import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-newscontent',
  templateUrl: './newscontent.component.html',
  styleUrl: './newscontent.component.scss'
})
export class NewscontentComponent {

  constructor(public route:ActivatedRoute) {

  }

  ngOnInit() {
    console.log(this.route)

    //get傳值
    // this.route.queryParams.subscribe((data) => {
    //   console.log(data)
    // })

    //動態路由傳值
    console.log(this.route.params)
    this.route.params.subscribe((data) => {
      console.log(data)
    })
  }

}
