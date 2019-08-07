import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { HiComponent } from './first/hi.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { SizerDirective } from './directives/sizer.directive';
import { PricingComponent } from './pricing/pricing.component';
import { NavComponent } from './pricing/nav/nav.component';
import { InfoComponent } from './pricing/info/info.component';
import { CardConatinerComponent } from './pricing/card-conatiner/card-conatiner.component';
import { CardComponent } from './pricing/card-conatiner/card/card.component';
import { FooterContainerComponent } from './pricing/footer-container/footer-container.component';
import { FooterComponent } from './pricing/footer-container/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    HiComponent,
    DatabindingComponent,
    DirectivesComponent,
    SizerDirective,
    PricingComponent,
    NavComponent,
    InfoComponent,
    CardConatinerComponent,
    CardComponent,
    FooterContainerComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
