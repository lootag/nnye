import { Component, Input, OnInit } from '@angular/core';
import { NavbarItem } from '../../../models/nav-bar-item';
import { note } from '../../../constants/note';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss']
})
export class FrameComponent implements OnInit {

  constructor() { }

  items: any;
  note: string;

  ngOnInit(): void {
    this.note = note;
  }
}
