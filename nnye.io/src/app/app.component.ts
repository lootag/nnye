import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Join', url: '/join', icon: 'book-outline'},
    { title: 'About', url: '/about', icon: 'book-outline' },
    { title: 'Team', url: '/team', icon: 'people-outline' },
    { title: 'Roadmap', url: '/roadmap', icon: 'map-outline' },
    { title: 'NFTs', url: '/nfts', icon: 'camera-outline' },
  ];
  constructor() {}
}
