import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { PalletComponent } from './spray/pallet/pallet.component';
import { SixtyComponent } from './spray/sixty/sixty.component';
import { SprayComponent } from './spray/spray.component';

const routes: Routes = [
  { path: '', component: SprayComponent },
  { path: 'sixty', component: SixtyComponent },
  { path: 'pallet', component: PalletComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SprayRoutingModule {}
