import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calory Tracker';
  totalCalories: number=0;
  receiveTotalCalories($event: number){
    this.totalCalories = $event;

  }
}
