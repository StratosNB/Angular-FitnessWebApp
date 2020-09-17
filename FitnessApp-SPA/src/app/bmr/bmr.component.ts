import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmr',
  templateUrl: './bmr.component.html',
  styleUrls: ['./bmr.component.css']
})
export class BmrComponent implements OnInit {

  public show:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showBmrResults(){
    this.show = !this.show;
  }

}
