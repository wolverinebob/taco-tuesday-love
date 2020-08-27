import { ViewDFWComponent } from './view-dfw/view-dfw.component';
import { ViewPHLComponent } from './view-phl/view-phl.component';
import { ViewSRQComponent } from './view-srq/view-srq.component';
import { ViewSANComponent } from './view-san/view-san.component';
import { ViewBOSComponent } from './view-bos/view-bos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { HomeComponent } from './home/home.component';
import { CityViewComponent } from './city-view/city-view.component';

const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "home"},
  {path: "home", component: HomeComponent},
  {path: "contact-create", component: ContactCreateComponent},
  {path: "contact-list", component: ContactListComponent},  
  {path: "city-view", component: CityViewComponent},
  {path: "dfw", component: ViewDFWComponent},
  {path: "phl", component: ViewPHLComponent},
  {path: "srq", component: ViewSRQComponent},
  {path: "san", component: ViewSANComponent},
  {path: "bos", component: ViewBOSComponent}
  // { path: '**', component:  HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
