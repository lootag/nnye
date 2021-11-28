import { Component, Input } from '@angular/core';
import { NavbarItem } from '../../../models/nav-bar-item';

@Component({
  selector: 'app-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.scss']
})
export class NavbarItemComponent {

  constructor() { }

  @Input() item: NavbarItem;
}
