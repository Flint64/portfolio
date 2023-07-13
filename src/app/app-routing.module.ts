import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectComponent } from './components/project/project.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', component: HomeComponent},
  
  { path: 'about', component:  AboutComponent },
  { path: 'contact', component:  ContactComponent },
  { path: 'project/:num', component:  ProjectComponent },

  { path: '**', redirectTo: '/' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
