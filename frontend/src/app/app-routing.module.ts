import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { AdminhomeComponent } from './pages/admin/adminhome/adminhome.component';
import { UpdatebooksComponent } from './pages/books/updatebooks/updatebooks.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UsersignupComponent } from './pages/user/signup/usersignup/usersignup.component';
import { UserhomeComponent } from './pages/user/userhome/userhome.component';
import { UserloginComponent } from './pages/user/userlogin/userlogin.component';

const routes: Routes = [{path:"",component:HomeComponent},{path:'aboutus',component:AboutusComponent},
{path:'login',component:LoginComponent},{path:'userlogin',component:UserloginComponent},
{path:'signup',component:SignupComponent},{path:'usersignup',component:UsersignupComponent},
{path:'adminhome',component:AdminhomeComponent},{path:'updatebooks',component:UpdatebooksComponent},
{path:'userhome',component:UserhomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
