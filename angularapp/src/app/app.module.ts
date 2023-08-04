import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { NewFoodComponent } from './component/new-food/new-food.component';
import { FoodSearchPipe } from './component/new-food/food-search.pipe';
import { TodayComponent } from './today/today.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewFoodComponent,
    FoodSearchPipe,
    TodayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
