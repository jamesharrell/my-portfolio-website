import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { portfolio_constants } from './constants';
import { ListProjectsComponent } from './list-projects/list-projects.component';
import { GetProjectsService } from './services/get-projects';
import { HttpModule } from '@angular/http';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full'},
  {
      path: 'about',
      component: AboutComponent,
      data: { title: 'Home Page' }
  },
  {
      path: 'projects',
      component: ListProjectsComponent,
      data: { title: 'My Projects' }
  },
  { path: '#/**', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListProjectsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  providers: [portfolio_constants, GetProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
