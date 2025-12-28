import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/component/home/home.component';
import { UserComponent } from './shared/component/user/user.component';
import { ProductComponent } from './shared/component/product/product.component';

import { UserformComponent } from './shared/component/userform/userform.component';
import { UserdetailsComponent } from './shared/component/userdetails/userdetails.component';
import { FairsDsahboardComponent } from './shared/component/fairs-dsahboard/fairs-dsahboard.component';
import { FairCardComponent } from './shared/component/fair-card/fair-card.component';

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
    component:FairsDsahboardComponent,
    children:[
      {
        path:":fairId",
        component:FairCardComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
