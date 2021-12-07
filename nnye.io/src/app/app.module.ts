import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, IonicSlides, IonicSwiper } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { RoadmapComponent } from './pages/roadmap/roadmap.component';
import { TeamComponent } from './pages/team/team.component';
import { NftsComponent } from './pages/nfts/nfts.component';
import { MatStepperModule } from '@angular/material/stepper';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { Keyboard } from 'swiper';

@NgModule({
  declarations: [
      AppComponent,
      HomeComponent,
      AboutComponent,
      RoadmapComponent,
      TeamComponent,
      NftsComponent
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: environment.production,
  // Register the ServiceWorker as soon as the app is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
}), 
        SharedModule,
        MatStepperModule,
        SwiperModule,
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
