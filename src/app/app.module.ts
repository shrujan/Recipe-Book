import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { RecipeComponent } from './recipe/recipe.component';
// import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from './shopping/shopping-edit/shopping-edit.component';
import { DirectiveExperimentComponent } from './directive-experiment/directive-experiment.component';

//Custom Directives
import { basicHighlight } from './directive-experiment/attribute-directive/basicHighlight';
import { HighlightTextBetterDirective } from './directive-experiment/attribute-directive-better-approach/highlight-text-better.directive';
import { HighlightTextBetterBindingDirective } from './directive-experiment/attribute-directive-better-approach/highlight-text-better-binding.directive';
import { NgIfAlternativeDirective } from './directive-experiment/structural-directive/ng-if-alternative.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingComponent,
    RecipeComponent,
    // ShoppingListComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingEditComponent,
    DirectiveExperimentComponent,
    basicHighlight,
    HighlightTextBetterDirective,
    HighlightTextBetterBindingDirective,
    NgIfAlternativeDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
