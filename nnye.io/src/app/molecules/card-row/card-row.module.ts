import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardRowComponent } from './card-row/card-row.component';
import { CardModule } from '../../atoms/card/card.module';



@NgModule({
  declarations: [CardRowComponent],
  imports: [
    CommonModule,
    CardModule
  ],
  exports: [
    CardRowComponent
  ]
})
export class CardRowModule { }
