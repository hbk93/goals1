import { Component, OnInit } from '@angular/core';
import { Goals } from '../goals';

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {

  newGoal = new Goals(0,"","",new Date());

  constructor() { }

  ngOnInit(): void {
  }

}
