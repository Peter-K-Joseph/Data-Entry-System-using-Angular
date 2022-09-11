import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AluminiComponent } from './alumini/alumini.component';
import { AddonsComponent } from './addons/addons.component';
import { BlendedComponent } from './blended/blended.component';
import { GuestComponent } from './guest/guest.component';
import { IndustryComponent } from './industry/industry.component';
import { MoocComponent } from './mooc/mooc.component';
import { ModifyComponent } from './modify/modify.component';

const routes: Routes = [
  { path: '', component: AddonsComponent },
  { path: 'alumini', component: AluminiComponent },
  { path: 'alumini/:id', component: AluminiComponent },
  { path: 'blended', component: BlendedComponent },
  { path: 'guest', component: GuestComponent },
  { path: 'industry', component: IndustryComponent },
  { path: 'industry/:id', component: IndustryComponent },
  { path: 'mooc', component: MoocComponent },
  { path: 'modify', component: ModifyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
