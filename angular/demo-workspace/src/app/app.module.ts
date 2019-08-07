import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { HiComponent } from './first/hi.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { SizerDirective } from './directives/sizer.directive';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    HiComponent,
    DatabindingComponent,
    DirectivesComponent,
    SizerDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
