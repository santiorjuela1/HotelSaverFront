import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefineUsersComponent } from './components/define-users/define-users.component';
import { RegistroUserComponent } from './components/registro-user/registro-user.component';
import { LogInHotelComponent } from './components/log-in-hotel/log-in-hotel.component';
import { RegistroHotelComponent } from './components/registro-hotel/registro-hotel.component';
import { ClientComponentComponent } from './components/client-component/client-component.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HotelesComponent } from './components/hoteles/hoteles.component'; 
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    DefineUsersComponent,
    RegistroUserComponent,
    LogInHotelComponent,
    RegistroHotelComponent,
    ClientComponentComponent,
    HotelesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    RouterModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    CommonModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
