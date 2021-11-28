import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../../models/card';

@Component({
  selector: 'app-card-block',
  templateUrl: './card-block.component.html',
  styleUrls: ['./card-block.component.scss']
})
export class CardBlockComponent implements OnInit {

  constructor() { }

  @Input() cardRows: Card[][]

  ngOnInit(): void {
  }

}
