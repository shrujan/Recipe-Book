import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightTextBetterBinding]'
})
export class HighlightTextBetterBindingDirective implements OnInit {
  // get custom parameter  - color from html and use them here in the directive
  @Input('defaultCol') defaultCol: string = 'transparent';
  @Input('customCol') customColor: string = 'dodgerblue';

  // access the valid property of the dom element here but the value is
  //  not available from dom initially so its transparent not yellow as mentioned in dom
  // so moving the initilization to onInit
  // @HostBinding('style.backgroundColor') backCol: string = this.defaultCol;

  @HostBinding('style.backgroundColor') backCol: string ;

  constructor() { }

  ngOnInit() {
    this.backCol = this.defaultCol;
  }

  @HostListener('mouseenter') enter(eventData: Event) {
      this.backCol = this.customColor;
  }

  @HostListener('mouseleave') leave(eventData: Event) {
    this.backCol = this.defaultCol;
  }

}
