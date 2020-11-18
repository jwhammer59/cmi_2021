import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EngineeringComponent } from './services/engineering/engineering.component';
import { ServicesComponent } from './services/services.component';
import { MachiningComponent } from './services/machining/machining.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: ServicesComponent },
  { path: 'engineering', component: EngineeringComponent },
  { path: 'machining', component: MachiningComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule {}
