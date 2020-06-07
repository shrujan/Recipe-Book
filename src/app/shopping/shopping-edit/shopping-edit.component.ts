import { Component, OnInit, ElementRef, ViewChild , EventEmitter, Output} from '@angular/core';
import { Ingredient } from '../../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.sass']
})
export class ShoppingEditComponent implements OnInit {
 @ViewChild('nameInput', { static: true }) nameElemRef: ElementRef;
 @ViewChild('amountInput', { static: true }) amountElemRef: ElementRef;

 @Output('shoppingItemDetails') shoppingEmit = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  // this is how we accept local reference data in controller 
  // onAddItem (nameElem, amountElem) {
  //   console.log(nameElem.value, amountElem.value);
  // }

  onAddItem () {
    console.log(this.nameElemRef.nativeElement.value, this.amountElemRef.nativeElement.value);
    const newIngredient = new Ingredient( this.nameElemRef.nativeElement.value, Number( this.amountElemRef.nativeElement.value))
    
    this.shoppingEmit.emit(newIngredient);
    this.nameElemRef.nativeElement.value = "";
    this.amountElemRef.nativeElement.value = "";


  }
}
