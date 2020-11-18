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
      },
      {
        label: 'Machinery',
        icon: 'pi pi-fw pi-cog',
      },
      {
        label: 'About Us',
        icon: 'pi pi-fw pi-users',
      },
      {
        label: 'Services',
        icon: 'pi pi-fw pi-list',
        items: [
          { label: 'Milling & Turning', icon: 'pi pi-fw pi-refresh' },
          { label: 'Engineering Support', icon: 'pi pi-fw pi-refresh' },
          { separator: true },
          { label: 'Spray Machines', icon: 'pi pi-fw pi-refresh' },
          { label: '60 Station', icon: 'pi pi-fw pi-refresh' },
          { label: 'Pallet Indexing', icon: 'pi pi-fw pi-refresh' },
        ],
      },
      {
        label: 'Gallery',
        icon: 'pi pi-fw pi-camera',
      },
      {
        label: 'Contact Us',
        icon: 'pi pi-fw pi-envelope',
      },
    ];
  }
}
