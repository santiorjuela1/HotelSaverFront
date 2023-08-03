import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { DefineUsersComponent } from './components/define-users/define-users.component';
import { RegistroUserComponent } from './components/registro-user/registro-user.component';
import { LogInHotelComponent } from './components/log-in-hotel/log-in-hotel.component';
import { RegistroHotelComponent } from './components/registro-hotel/registro-hotel.component';
import { HotelesComponent } from './components/hoteles/hoteles.component';


const routes: Routes = [
  { path: 'login', component: LogInComponent },
  { path: 'inicio', component: DefineUsersComponent },
  { path: 'registroUser', component: RegistroUserComponent},
  { path: 'loginhotel', component : LogInHotelComponent},
  { path: 'registrohotel', component: RegistroHotelComponent},
  { path: 'hoteles', component: HotelesComponent},
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
