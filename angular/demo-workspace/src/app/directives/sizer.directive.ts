import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appSizer]'
})
export class SizerDirective {

  @HostBinding('style.width.px')
  width: number

  constructor() { }

  @HostListener('mouseenter')
  mouseIn() {
    this.width = 500
  }

  @HostListener('mouseleave')
  mouseOut() {
    this.width = 300
  }
}
