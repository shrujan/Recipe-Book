import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Recipe';
  viewSelected = 'recipe';

  showViews (view: string) {
      console.log(view);
      this.viewSelected = view;
  }
}
