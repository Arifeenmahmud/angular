import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonModule } from './person/person.module';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MastheadComponent } from './components/masthead/masthead.component';
import { ServicesComponent } from './components/services/services.component';
import { PortfolioGridComponent } from './components/portfolio-grid/portfolio-grid.component';
import { AboutComponent } from './components/about/about.component';
import { TeamComponent } from './components/team/team.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { InputFormatDirective } from './input-format.directive';
import { TemplateComponent } from './components/template/template.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    MastheadComponent,
    ServicesComponent,
    PortfolioGridComponent,
    AboutComponent,
    TeamComponent,
    ClientsComponent,
    ContactComponent,
    FooterComponent,
    InputFormatDirective,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PersonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
