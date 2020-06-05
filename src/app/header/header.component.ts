import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  @Output('featureSelected') viewSelected = new EventEmitter<string>()
  
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(view: string){
    this.viewSelected.emit(view);

       
  }
}
