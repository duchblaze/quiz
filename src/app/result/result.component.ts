import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {

  //to go back to app componet
  @Output() showMainMenuScreen = new EventEmitter()

  public finalResult: any;

  //to go back to app componet
  showMainMenu() {
    this.showMainMenuScreen.emit(true)
  }
}
