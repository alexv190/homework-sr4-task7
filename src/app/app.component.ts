import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homework-sr4-task7';
  condition = true;

  toggle() {
    this.condition = !this.condition;
    console.log('toogle')
  }
}
