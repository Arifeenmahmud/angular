import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MastheadComponent } from './masthead/masthead.component';

const routes: Routes = [
  { path: 'home', component: MastheadComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
