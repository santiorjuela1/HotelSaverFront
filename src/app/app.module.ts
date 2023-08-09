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
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HotelesComponent } from './components/hoteles/hoteles.component'; 
import {MatTableModule} from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservaComponent } from './components/reserva/reserva.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { UserComponent } from './components/user/user.component';
import { PasswordPipePipe } from './pipes/password-pipe.pipe';
import { UpdateInformationHotelComponent } from './components/update-information-hotel/update-information-hotel.component';
import { DropdownuserComponent } from './components/dropdownuser/dropdownuser.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { GeneralToolbarComponent } from './components/general-toolbar/general-toolbar.component';
import { UserToolBarComponent } from './components/user-tool-bar/user-tool-bar.component';
import { UpdateInformationUserComponent } from './components/update-information-user/update-information-user.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    DefineUsersComponent,
    RegistroUserComponent,
    LogInHotelComponent,
    RegistroHotelComponent,
    ClientComponentComponent,
    HotelesComponent,
    ReservaComponent,
    LoginUserComponent,
    HotelComponent,
    UserComponent,
    PasswordPipePipe,
    UpdateInformationHotelComponent,
    DropdownuserComponent,
    GeneralToolbarComponent,
    UserToolBarComponent,
    UpdateInformationUserComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatInputModule,
    RouterModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    CommonModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
