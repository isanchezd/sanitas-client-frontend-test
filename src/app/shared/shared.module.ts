import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToogleSwitchComponent } from './components/toogle-switch/toogle-switch.component'


@NgModule({
  declarations: [ToogleSwitchComponent],
  imports: [
    CommonModule
  ],
  exports: [ToogleSwitchComponent]
})
export class SharedModule { }
