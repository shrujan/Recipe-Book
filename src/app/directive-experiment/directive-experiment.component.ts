import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-experiment',
  templateUrl: './directive-experiment.component.html',
  styleUrls: ['./directive-experiment.component.scss']
})
export class DirectiveExperimentComponent implements OnInit {
  // numbers = [1, 2, 3, 4, 5];
  numberOdd = [1, 3, 5];
  numberEven = [2, 4, 6];
  onlyOdd = false;

  constructor() { }

  ngOnInit(): void {
  }

}
