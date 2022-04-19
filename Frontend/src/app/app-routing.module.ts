import { OopsComponent } from './public/oops/oops.component';
import { BuildpizzaComponent } from './public/buildpizza/buildpizza.component';
import { MenuComponent } from './public/menu/menu.component';
import { HomeComponent } from './public/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'menu',component:MenuComponent},
  {path:'buildpizza',component:BuildpizzaComponent},
  {path:'oops',component:OopsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
