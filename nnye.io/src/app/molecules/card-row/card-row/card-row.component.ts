import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../../models/card';

@Component({
  selector: 'app-card-row',
  templateUrl: './card-row.component.html',
  styleUrls: ['./card-row.component.scss']
})
export class CardRowComponent implements OnInit {

  constructor() { }
      
  @Input() cards: Card[];

  ngOnInit(): void {
  }

}
