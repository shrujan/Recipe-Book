import { Directive, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightTextBetter]'
})
export class HighlightTextBetterDirective implements OnInit{

  constructor(private elemRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.elemRef.nativeElement, "background-color", 'dodgerblue');

  }

  // adding event listner here to check if the user mouse hover over the p tag
  @HostListener('mouseenter') mousehover(eventData: Event) {
      this.renderer.setStyle(this.elemRef.nativeElement, "background-color", "blue")
  }

  @HostListener('mouseleave') mouseOnLeave(eventData: Event) {
      this.renderer.setStyle(this.elemRef.nativeElement, "background-color", "dodgerblue")
  }

}
