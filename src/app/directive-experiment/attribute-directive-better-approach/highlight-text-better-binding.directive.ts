import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightTextBetterBinding]'
})
export class HighlightTextBetterBindingDirective {
  // access the valid property of the dom element here 
  @HostBinding('style.backgroundColor') backCol: string = 'transparent';

  constructor() { }

  @HostListener('mouseenter') enter(eventData: Event) {
      this.backCol = 'red'
  }

  @HostListener('mouseleave') leave(eventData: Event) {
    this.backCol = 'transparent'
  }

}
