import { Component, OnInit } from '@angular/core';
import { about } from 'src/app/contents/about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {

  constructor() { }

  public about = about;

  ngOnInit() {}

}
