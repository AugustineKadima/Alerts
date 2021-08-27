import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashbordOverviewComponent } from './dashbord-overview/dashbord-overview.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CreateAlertComponent } from './create-alert/create-alert.component';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { MyAlertsComponent } from './my-alerts/my-alerts.component';
import { EditAccountsComponent } from './edit-accounts/edit-accounts.component';
import { HelpComponent } from './help/help.component';
import { LandingPageHeaderComponent } from './landing-page-header/landing-page-header.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { FormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashHomeComponent } from './dash-home/dash-home.component';
import { LoginHeaderComponent } from './login-header/login-header.component';
import { SignupHeaderComponent } from './signup-header/signup-header.component';

// import {  }

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    SignupComponent,
    DashbordOverviewComponent,
    HeaderComponent,
    FooterComponent,
    CreateAlertComponent,
    AlertModalComponent,
    MyAlertsComponent,
    EditAccountsComponent,
    HelpComponent,
    LandingPageHeaderComponent,
    DashboardHeaderComponent,
    SidenavComponent,
    DashHomeComponent,
    LoginHeaderComponent,
    SignupHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatBadgeModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
