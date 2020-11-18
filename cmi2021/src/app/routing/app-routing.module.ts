import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';
import { HomeComponent } from '../components/home/home.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact-us', component: ContactComponent },
  {
    path: 'gallery',
    loadChildren: () =>
      import('../components/gallery/gallery.module').then(
        (m) => m.GalleryModule
      ),
  },
  {
    path: 'machinery',
    loadChildren: () =>
      import('../components/machinery/machinery.module').then(
        (m) => m.MachineryModule
      ),
  },
  {
    path: 'services',
    loadChildren: () =>
      import('../components/services/services.module').then(
        (m) => m.ServicesModule
      ),
  },
  {
    path: 'spray',
    loadChildren: () =>
      import('../components/spray/spray.module').then((m) => m.SprayModule),
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
