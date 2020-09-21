import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent implements OnInit {

  show:boolean = false;
  @Input() HeightInput: number;
  @Input() WeightInput: number;
  @Input() bmiResult: number;
  @Output() bmiResultCalculate = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  showBmiResults(){

    this.bmiResult = this.WeightInput/ (this.HeightInput*this.HeightInput);

    this.bmiResultCalculate.emit(this.bmiResult);

    this.show = !this.show;



  }

}
