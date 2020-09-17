import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bf',
  templateUrl: './bf.component.html',
  styleUrls: ['./bf.component.css']
})
export class BfComponent implements OnInit {

  public show:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showBfResults(){
    this.show = !this.show;
  }

}
