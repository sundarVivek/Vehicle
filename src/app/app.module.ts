import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

//material
import {MatFormFieldModule} from '@angular/material/form-field';
import { TrackVehicleComponent } from './customer-panel/track-vehicle/track-vehicle.component';
import { AdminHomeComponent } from './admin-panel/admin-home/admin-home.component';
import { AddServiceComponent } from './admin-panel/admin-home/add-service/add-service.component';
import { ChangeStatusComponent } from './admin-panel/admin-home/change-status/change-status.component';
import { ServiceHistoryComponent } from './admin-panel/admin-home/service-history/service-history.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './user/login/register/register.component';
import { ViewServiceComponent } from './admin-panel/view-service/view-service.component';
import { EditServiceComponent } from './admin-panel/edit-service/edit-service.component';
import { ToastrModule } from 'ngx-toastr';
import {CdkTableModule} from '@angular/cdk/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table';
import { SelectUserComponent } from './select-user/select-user.component';
import { SidebarComponent } from './admin-panel/sidebar/sidebar.component';
import { AddCustomerComponent } from './admin-panel/add-customer/add-customer.component';
import { AdminRegistrationComponent } from './admin-panel/admin-registration/admin-registration.component';
import { HeaderComponent } from './header/header.component'; 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TrackVehicleComponent,
    AdminHomeComponent,
    AddServiceComponent,
    ChangeStatusComponent,
    ServiceHistoryComponent,
    RegisterComponent,
    ViewServiceComponent,
    EditServiceComponent,
    SelectUserComponent,
    SidebarComponent,
    AddCustomerComponent,
    AdminRegistrationComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
