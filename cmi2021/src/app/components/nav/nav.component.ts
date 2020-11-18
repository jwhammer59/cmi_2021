import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: '/',
      },
      {
        label: 'Machinery',
        icon: 'pi pi-fw pi-cog',
        routerLink: '/machinery',
      },
      {
        label: 'About Us',
        icon: 'pi pi-fw pi-users',
        routerLink: '/about',
      },
      {
        label: 'Services',
        icon: 'pi pi-fw pi-list',
        items: [
          {
            label: 'All Services',
            icon: 'pi pi-fw pi-list',
            routerLink: '/services',
          },
          {
            label: 'Milling & Turning',
            icon: 'pi pi-fw pi-cog',
            routerLink: '/services/machining',
          },
          {
            label: 'Engineering Support',
            icon: 'pi pi-fw pi-user-edit',
            routerLink: '/services/engineering',
          },
          { separator: true },
          {
            label: 'Spray Machines',
            icon: '',
            routerLink: '/spray',
          },
          {
            label: '60 Station',
            icon: '',
            routerLink: '/spray/sixty',
          },
          {
            label: 'Pallet Indexing',
            icon: '',
            routerLink: '/spray/pallet',
          },
        ],
      },
      {
        label: 'Gallery',
        icon: 'pi pi-fw pi-camera',
        routerLink: '/gallery',
      },
      {
        label: 'Contact Us',
        icon: 'pi pi-fw pi-envelope',
        routerLink: '/contact-us',
      },
    ];
  }
}
