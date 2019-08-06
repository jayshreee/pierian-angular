import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

  course = 'angular'
  topic = 'directives'
  typ = 'text'
  brd = '1px solid red'
  st = {
    border: '2px solid blue',
    'background-color': 'red'
  }
  bkCl = 'red'

  constructor() { }

  clcgghfjk() {
    console.log(`Clicked ${Date.now()}`)
  }

  onEnter() {

    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)

    this.bkCl = `rgb(${r}, ${g}, ${b})`
    console.log(`Generated Color is ${this.bkCl}`)
  }
}
