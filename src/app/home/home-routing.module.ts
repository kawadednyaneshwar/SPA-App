import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { ContactUsComponent } from './pages/contactus/contact-us/contact-us.component';
import { AboutUsComponent } from './pages/aboutus/about-us/about-us.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"home", component:HomeComponent},
  {path:"abotus", component:AboutUsComponent},
  {path:"contactUs", component:ContactUsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
