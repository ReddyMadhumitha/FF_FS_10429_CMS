import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RaiseclaimrequestComponent } from './raiseclaimrequest/raiseclaimrequest.component';
import { ClaimrequestsComponent } from './claimrequests/claimrequests.component';
import { SearchclaimComponent } from './searchclaim/searchclaim.component';
import { UpdatepaymentComponent } from './updatepayment/updatepayment.component';
import { UpdatememberstatusComponent } from './updatememberstatus/updatememberstatus.component';
import { ClaimstobeprocessedComponent } from './claimstobeprocessed/claimstobeprocessed.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { ListclaimsComponent } from './listclaims/listclaims.component';
import { BulkstatusupdateComponent } from './bulkstatusupdate/bulkstatusupdate.component';
import { HttpClientModule } from '@angular/common/http';
import { MemberstobeactivatedComponent } from './memberstobeactivated/memberstobeactivated.component';
import { CheckmembereligibilityComponent } from './checkmembereligibility/checkmembereligibility.component';
import { AdminComponent } from './admin/admin.component';
import { MemberComponent } from './member/member.component';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    UserhomeComponent,
    RaiseclaimrequestComponent,
    ClaimrequestsComponent,
    SearchclaimComponent,
    UpdatepaymentComponent,
    UpdatememberstatusComponent,
    ClaimstobeprocessedComponent,
    UpdateprofileComponent,
    ListclaimsComponent,
    BulkstatusupdateComponent,
    MemberstobeactivatedComponent,
    CheckmembereligibilityComponent,
    AdminComponent,
    MemberComponent
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