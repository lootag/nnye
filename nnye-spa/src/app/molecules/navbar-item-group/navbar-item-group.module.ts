import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarItemModule } from '../../atoms/navbar-item/navbar-item.module';
import { NavbarItemGroupComponent } from './navbar-item-group/navbar-item-group.component';



@NgModule({
  declarations: [NavbarItemGroupComponent],
  imports: [
    CommonModule,
    NavbarItemModule
  ], 
  exports: [
    NavbarItemGroupComponent
  ]
})
export class NavbarItemGroupModule { }
