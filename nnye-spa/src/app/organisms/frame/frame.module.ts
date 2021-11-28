import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarItemGroupModule } from '../../molecules/navbar-item-group/navbar-item-group.module';
import { FrameComponent } from './frame/frame.component';
import { NgxSbzTextAnimationModule } from 'ngx-sbz-text-animation';



@NgModule({
  declarations: [FrameComponent],
  imports: [
    CommonModule,
    NavbarItemGroupModule,
    NgxSbzTextAnimationModule
  ], 
  exports: [
    FrameComponent
  ]
})
export class FrameModule { }
