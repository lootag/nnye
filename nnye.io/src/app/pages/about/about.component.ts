import { Component, OnInit } from '@angular/core';
import { title, intro, servers, hardware } from '../../constants/about/about-page';
import { note } from '../../constants/note';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  public note: string;
  public navbarItems: any;
  public title: string;
  public intro: string;
  public servers: string;
  public hardware: string;
  ngOnInit(): void {
     this.note = note; 
     this.title = title;
     this.intro = intro;
     this.servers = servers;
     this.hardware = hardware;
 }

}
