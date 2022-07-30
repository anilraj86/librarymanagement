import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { AdminhomeComponent } from './pages/admin/adminhome/adminhome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UsersignupComponent } from './pages/user/signup/usersignup/usersignup.component';
import { UserloginComponent } from './pages/user/userlogin/userlogin.component';

const routes: Routes = [{path:"",component:HomeComponent},{path:'aboutus',component:AboutusComponent},
{path:'login',component:LoginComponent},{path:'userlogin',component:UserloginComponent},
{path:'signup',component:SignupComponent},{path:'usersignup',component:UsersignupComponent},
{path:'adminhome',component:AdminhomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
