import { Component, OnInit } from '@angular/core';
import { Goals } from '../goals';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals:Goals[] = [
    new Goals(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son'),
    new Goals(2, 'Buy Cookies', 'I have to buy cookies for the parrot'),
    new Goals(3, 'Buy new Phone case', 'Diana has her birthday coming up soon'),
    new Goals(4,  'Get Dog Food', 'Pupper likes expensive snacks'),
    new Goals(5, 'Solve math homework', 'I love Math'),
    new Goals(6, 'Plot a world domination plan', 'Cause I am an evil overlord. "Muhahahah"'),
  ];

  toggleDetails(index:any){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  completeGoal(isComplete:any, index:any){
    if (isComplete) {
      this.goals.splice(index,1);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
