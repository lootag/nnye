import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FrameModule } from './organisms/frame/frame.module';
import { CardBlockModule } from './organisms/card-block/card-block.module';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { NgxSbzTextAnimationModule } from 'ngx-sbz-text-animation';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutComponent } from './pages/about/about.component';
import { MissionComponent } from './pages/mission/mission.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutComponent,
    MissionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FrameModule,
    IvyCarouselModule,
    NgxSbzTextAnimationModule,
    NgbModule,
    FormsModule,
    CardBlockModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
