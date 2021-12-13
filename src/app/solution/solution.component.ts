import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {

  constructor() { }
  showExplanation = false;
  clicks : Array<Number> = [];

  ngOnInit(): void {
  }

  showExplanationDetail(){
    this.showExplanation = !this.showExplanation;
    this.clicks.push(this.clicks.length + 1);
  }

  getBackgroundColor(index:Number){
    return index >= 4 ? 'blue' : 'initial';
  }

}
