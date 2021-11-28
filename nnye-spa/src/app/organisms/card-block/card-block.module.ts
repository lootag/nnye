import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardBlockComponent } from './card-block/card-block.component';
import { CardRowModule } from '../../molecules/card-row/card-row.module';



@NgModule({
  declarations: [CardBlockComponent],
  imports: [
    CommonModule,
    CardRowModule
  ],
  exports: [
    CardBlockComponent
  ]
})
export class CardBlockModule { }
