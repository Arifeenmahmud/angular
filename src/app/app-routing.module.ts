import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioGridComponent } from './components/portfolio-grid/portfolio-grid.component';
import { ServicesComponent } from './components/services/services.component';
import { TeamComponent } from './components/team/team.component';
import { TemplateComponent } from './components/template/template.component';
import { HomeComponent } from './person/home/home.component';
import { MastheadComponent } from './components/masthead/masthead.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MastheadComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'client', component: ClientsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'portfolio', component: PortfolioGridComponent },
  {
    path: 'team', component: TeamComponent,
    children: [
      { path: '', component: HomeComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
