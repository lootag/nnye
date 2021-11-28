import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutComponent } from './pages/about/about.component';
import { MissionComponent } from './pages/mission/mission.component';

const routes: Routes = [
    { path: "", component: HomePageComponent },
    { path: "about", component: AboutComponent },
    { path: "mission", component: MissionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
