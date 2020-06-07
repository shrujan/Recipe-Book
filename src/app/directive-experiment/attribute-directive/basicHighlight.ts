import { Directive, ElementRef, OnInit } from '@angular/core';


@Directive({
    selector: "[appHighlightText]",
})
export class basicHighlight implements OnInit{
    constructor(private elem: ElementRef) {

    }

    ngOnInit() {
        console.log(this.elem);
        this.elem.nativeElement.style.backgroundColor = 'green';
    }

}