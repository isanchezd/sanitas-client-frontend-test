import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toogle-switch',
  templateUrl: './toogle-switch.component.html',
  styleUrls: ['./toogle-switch.component.scss']
})
export class ToogleSwitchComponent {

  @Output() public changeToogle;
  private _state: boolean;

  constructor() {
    this.changeToogle = new EventEmitter();
    this._state = false;
  }

  public toogle() {
    this._state = !this._state;
    this.changeToogle.emit(this._state);
  }

}
