import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralModule } from 'src/app/core/general.module';

import { MachineryRoutingModule } from './machinery-routing.module';
import { MachineryComponent } from './machinery/machinery.component';

@NgModule({
  declarations: [MachineryComponent],
  imports: [CommonModule, MachineryRoutingModule, GeneralModule],
})
export class MachineryModule {}
