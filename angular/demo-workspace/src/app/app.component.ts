import { Component } from '@angular/core';
import { EvDt } from './custom/custom.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-workspace';

  customComponentClicked(e: EvDt) {
    console.log(e)
  }
}
