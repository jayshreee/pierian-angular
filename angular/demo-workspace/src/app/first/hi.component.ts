import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hi',
  template: `
    <p>
      hi works!
    </p>
  `,
  styles: [`
    p {
      border : 1px solid red
    }
  `]
})
export class HiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
