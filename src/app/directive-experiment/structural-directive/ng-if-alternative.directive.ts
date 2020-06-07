import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appNgIfAlternative]'
})
export class NgIfAlternativeDirective {
  // the name of directive should be the same everywhere /
  @Input() set appNgIfAlternative (condition: boolean){
    console.log('con', condition)
      if (!condition) {
        // creates a veiw  in dom 
        this.vcRef.createEmbeddedView(this.templateRef)
      } else {
        this.vcRef.clear()
      }
  }


  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
