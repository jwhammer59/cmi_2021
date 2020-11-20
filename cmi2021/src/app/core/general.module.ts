import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeModule } from 'src/app/prime-ng/prime.module';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, PrimeModule],
  exports: [PrimeModule, HeaderComponent],
})
export class GeneralModule {}
