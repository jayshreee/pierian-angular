import { LoginComponent } from './login/login/login.component';
import { ResourcePageComponent } from './resources/resource-page/resource-page.component';
import { EventsPageComponent } from './events/events-page/events-page.component';
import { BlogPageComponent } from './blog/blog-page/blog-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashPageComponent } from './dash/dash-page/dash-page.component';

const dashRoutes: Routes = [
  { path: 'blog', component: BlogPageComponent },
  { path: 'events', component: EventsPageComponent },
  { path: 'resources', component: ResourcePageComponent }
]

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dash', component: DashPageComponent, children: dashRoutes },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
