import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { MyorderComponent } from './myorder/myorder.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"about", component: AboutComponent},
  {path:"menu", component:MenuComponent},
  {path:"myorder", component: MyorderComponent},
  {path:"details/:index", component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
