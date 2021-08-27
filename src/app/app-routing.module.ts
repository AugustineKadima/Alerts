import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAlertComponent } from './create-alert/create-alert.component';
import { DashbordOverviewComponent } from './dashbord-overview/dashbord-overview.component';
import { EditAccountsComponent } from './edit-accounts/edit-accounts.component';
import { HelpComponent } from './help/help.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { MyAlertsComponent } from './my-alerts/my-alerts.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'create-alert', component: CreateAlertComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'dashboard', component: DashbordOverviewComponent},
  {path: 'help', component: HelpComponent},
  {path: 'edit-account', component: EditAccountsComponent},
  {path: 'my-alerts', component:MyAlertsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
