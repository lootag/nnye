import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { NftsComponent } from './pages/nfts/nfts.component';
import { RoadmapComponent } from './pages/roadmap/roadmap.component';
import { TeamComponent } from './pages/team/team.component';

const routes: Routes = [
    { path: "", redirectTo: "/join", pathMatch: 'full' },
    { path: "join", component: HomeComponent },
    { path: "about", component: AboutComponent },
    { path: "team", component: TeamComponent },
    { path: "roadmap", component: RoadmapComponent },
    { path: "nfts", component: NftsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
