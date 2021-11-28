import { Component, Input, OnInit } from '@angular/core';
import { NavbarItem } from '../../../models/nav-bar-item';

@Component({
  selector: 'app-navbar-item-group',
  templateUrl: './navbar-item-group.component.html',
  styleUrls: ['./navbar-item-group.component.scss']
})
export class NavbarItemGroupComponent implements OnInit {

  constructor() { }

  @Input() items: NavbarItem[];
  @Input() headline: string;

  ngOnInit(): void {
    console.log(this.items) 
  }
}
