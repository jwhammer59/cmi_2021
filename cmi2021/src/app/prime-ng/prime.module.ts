import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'primeng/api';

import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { PasswordModule } from 'primeng/password';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    AccordionModule,
    ButtonModule,
    CalendarModule,
    CardModule,
    CheckboxModule,
    ConfirmDialogModule,
    DialogModule,
    DropdownModule,
    InputNumberModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextModule,
    MenubarModule,
    PanelModule,
    PasswordModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    SelectButtonModule,
    TableModule,
    TabViewModule,
    ToastModule,
    ToolbarModule,
    TooltipModule,
  ],
  exports: [
    SharedModule,
    AccordionModule,
    ButtonModule,
    CalendarModule,
    CardModule,
    CheckboxModule,
    ConfirmDialogModule,
    DialogModule,
    DropdownModule,
    InputNumberModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextModule,
    MenubarModule,
    PanelModule,
    PasswordModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    SelectButtonModule,
    TableModule,
    TabViewModule,
    ToastModule,
    ToolbarModule,
    TooltipModule,
  ],
})
export class PrimeModule {}
