import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Goals';
  goal:string[];

  constructor(){
    this.goal = ['Watch finding Nemo', ' Buy cookies', ' get new phone case']
  }
}
