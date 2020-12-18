import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MemberComponent } from './member/member.component';
import { AdminComponent } from './admin/admin.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
// import { ListClaimsComponent } from './list-claims/list-claims.component';
// import { PaymentUpdateComponent } from './payment-update/payment-update.component';
import { RaiseClaimRequestComponent } from './raise-claim-request/raise-claim-request.component';
import { SearchClaimComponent } from './search-claim/search-claim.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import { UpdateStatusComponent } from './update-status/update-status.component';
// import { BulkUpdateComponent } from './bulk-update/bulk-update.component';
// import { EligibleComponent } from './eligible/eligible.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    MemberComponent,
    AdminComponent,
    UpdateProfileComponent,
    // ListClaimsComponent,
    // PaymentUpdateComponent,
    RaiseClaimRequestComponent,
    SearchClaimComponent,
    UpdateStatusComponent,
    // BulkUpdateComponent,
    // EligibleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
