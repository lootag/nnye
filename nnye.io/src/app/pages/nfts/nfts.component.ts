import { Component, OnInit } from '@angular/core';
import { nfts } from 'src/app/contents/nfts';

@Component({
  selector: 'app-nfts',
  templateUrl: './nfts.component.html',
  styleUrls: ['./nfts.component.scss'],
})
export class NftsComponent implements OnInit {

  constructor() { }
  public nfts = nfts;

  ngOnInit() {}

}
