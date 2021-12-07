import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { NgxSbzTextAnimationModule } from 'ngx-sbz-text-animation';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule, 
    BrowserModule, 
    IonicModule.forRoot(),
    NgxSbzTextAnimationModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
