import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeModule } from 'src/app/prime-ng/prime.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, PrimeModule],
  exports: [PrimeModule],
})
export class GeneralModule {}
