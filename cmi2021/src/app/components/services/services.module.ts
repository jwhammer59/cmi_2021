import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services/services.component';
import { MachiningComponent } from './services/machining/machining.component';
import { EngineeringComponent } from './services/engineering/engineering.component';


@NgModule({
  declarations: [ServicesComponent, MachiningComponent, EngineeringComponent],
  imports: [
    CommonModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule { }
