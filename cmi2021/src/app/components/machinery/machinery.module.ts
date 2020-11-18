import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MachineryRoutingModule } from './machinery-routing.module';
import { MachineryComponent } from './machinery/machinery.component';


@NgModule({
  declarations: [MachineryComponent],
  imports: [
    CommonModule,
    MachineryRoutingModule
  ]
})
export class MachineryModule { }
