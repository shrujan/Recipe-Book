import { Directive,  HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAppDropdown]'
})
export class AppDropdownDirective {
  // bind the class propertyof element and add new class open
  @HostBinding('class.open') isOpen = false;

  // @HostListener('click') toggleOpen() {
  //   this.isOpen = !this.isOpen;
  // }

  // this code shuts the dropdown when clicked anywhere on the page
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target)? !this.isOpen: false;
  }

  constructor(private elRef : ElementRef) { }

 
}
