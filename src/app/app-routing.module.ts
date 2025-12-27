import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/component/home/home.component';
import { UserComponent } from './shared/component/user/user.component';
import { ProductComponent } from './shared/component/product/product.component';
import { FairsComponent } from './shared/component/fairs/fairs.component';
import { UserformComponent } from './shared/component/userform/userform.component';
import { UserdetailsComponent } from './shared/component/userdetails/userdetails.component';

const routes: Routes = [

  {
    path:"",
   redirectTo: "home",
    pathMatch: "full"
  },
  {
    path:"home",
    component:HomeComponent
  },
   {
    path:"user",
    component:UserComponent
  },
  {
    path:"adduser",
    component:UserformComponent
  },
  {
    path:"user/:userId",
    component:UserdetailsComponent
  },
   {
    path:"user/:userId/edituser",
    component:UserformComponent
  },
   {
    path:"product",
    component:ProductComponent
  },
   {
    path:"fairs",
    component:FairsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
