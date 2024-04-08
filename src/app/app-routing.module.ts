import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { FormsModule } from '@angular/forms';
import { SellerHomeComponent } from './seller-home/seller-home.component';

const routes: Routes = [
  {
    component:HomeComponent,
    path:""
  },
  {
    component:SellerAuthComponent,
    path:"seller-auth"
  },
  {
    component: SellerHomeComponent ,
    path:"seller-home"
  },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,FormsModule]
})
export class AppRoutingModule { }
