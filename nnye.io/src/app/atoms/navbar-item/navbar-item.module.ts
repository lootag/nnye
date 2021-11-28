import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarItemComponent } from './navbar-item/navbar-item.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavbarItemComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarItemComponent
  ]
})
export class NavbarItemModule { }
