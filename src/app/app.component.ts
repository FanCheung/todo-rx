import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counterObj = { count: 0 }
  parentCount=0
  counter = 0
  hideChild=false
  add() {
    this.counter++;
  }

  addParentCount() {
    this.parentCount++;
  }
  addCountObject(){
    //++this.counterObj.count
    this.counterObj={count:++this.counterObj.count};
  }
}
