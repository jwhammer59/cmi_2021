import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SprayRoutingModule } from './spray-routing.module';
import { SprayComponent } from './spray/spray.component';
import { SixtyComponent } from './spray/sixty/sixty.component';
import { PalletComponent } from './spray/pallet/pallet.component';


@NgModule({
  declarations: [SprayComponent, SixtyComponent, PalletComponent],
  imports: [
    CommonModule,
    SprayRoutingModule
  ]
})
export class SprayModule { }
