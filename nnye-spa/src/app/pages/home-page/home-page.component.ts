import { Component, OnInit } from '@angular/core';
import { NavbarItem } from '../../models/nav-bar-item';
import { aboutText, aboutTitle, aboutLink, aboutSubtitle } from '../../constants/cards/home/about';
import { missionText, missionTitle, missionLink, missionSubtitle } from '../../constants/cards/home/mission';
import { downloadsText, downloadsTitle, downloadsLink, downloadsSubtitle } from '../../constants/cards/home/downloads';
import { note } from '../../constants/note';
import { Card } from '../../models/card';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  public navbarItems: NavbarItem[] = [];
  public cardRows: Card[][] = [];
  public note: string;

  
  ngOnInit(): void {
    this.setCardRows();
    this.note = note;
 }

  private setCardRows(): void {
    const aboutCard = {title: aboutTitle, subtitle: aboutSubtitle, text: aboutText, link: aboutLink};
    const missionCard = {title: missionTitle, subtitle: missionSubtitle, text: missionText, link: missionLink};
    const downloadsCard = {title: downloadsTitle, subtitle: downloadsSubtitle, text: downloadsText, link: downloadsLink};
    const cardRow = [aboutCard, missionCard, downloadsCard];
    this.cardRows.push(cardRow);
  }

}
