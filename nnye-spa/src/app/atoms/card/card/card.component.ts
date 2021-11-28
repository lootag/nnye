import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../../models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input() card: Card;

  ngOnInit(): void {
  }

}