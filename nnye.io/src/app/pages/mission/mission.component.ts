import { Component, OnInit } from '@angular/core';
import { title, intro, tech, censorship, hateSpeech, privacy } from '../../constants/mission/mission-page';
import { note } from '../../constants/note';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss']
})
export class MissionComponent implements OnInit {

  constructor() { }


  public note: string;
  public navbarItems: any;
  public title: string;
  public intro: string;
  public tech: string;
  public censorship: string;
  public hateSpeech: string; 
  public privacy: string;

  ngOnInit(): void {
     this.note = note; 
     this.title = title;
     this.intro = intro;
     this.tech = tech;
     this.censorship = censorship;
     this.hateSpeech = hateSpeech;
     this.privacy = privacy;
  }

}
