import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Join', url: '/join', icon: 'mail'},
    { title: 'About', url: '/about', icon: 'mail' },
    { title: 'Team', url: '/team', icon: 'paper-plane' },
    { title: 'Roadmap', url: '/roadmap', icon: 'heart' },
    { title: 'NFTs', url: '/nfts', icon: 'archive' },
  ];
  constructor() {}
}
