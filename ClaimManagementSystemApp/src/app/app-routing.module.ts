import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { from } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { RaiseclaimrequestComponent } from './raiseclaimrequest/raiseclaimrequest.component';
import { ClaimrequestsComponent } from './claimrequests/claimrequests.component';
import { SearchclaimComponent } from './searchclaim/searchclaim.component';
import { UpdatepaymentComponent } from './updatepayment/updatepayment.component';
import { UpdatememberstatusComponent } from './updatememberstatus/updatememberstatus.component';
import { ClaimstobeprocessedComponent } from './claimstobeprocessed/claimstobeprocessed.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { ListclaimsComponent } from './listclaims/listclaims.component';
import { BulkstatusupdateComponent } from './bulkstatusupdate/bulkstatusupdate.component';

import { parseI18nMeta } from '@angular/compiler/src/render3/view/i18n/meta';
const routes: Routes = [
  { path: "register", component: RegistrationComponent },
  { path: "login", component: LoginComponent },
  { path: "login/:p2", component: LoginComponent },
 
  { path: "home", component: HomeComponent }, 
  { path: "home/:p1", component: HomeComponent }, 
  { path: "userhome", component: UserhomeComponent },
  {path: "raiseclaimrequest",component:RaiseclaimrequestComponent },
  {path: "searchclaim",component:SearchclaimComponent },
  {path: "updatepayment",component:UpdatepaymentComponent  },
  {path: "updatememberstatus",component:UpdatememberstatusComponent  },
  {path: "claimstobeprocessed",component:ClaimstobeprocessedComponent },
  {path: "updateprofile",component:UpdateprofileComponent },
  {path: "listclaims",component:ListclaimsComponent  },
  {path: "bulkstatusupdate",component:BulkstatusupdateComponent }
];
 
@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } export const
  RoutingComponent = [HomeComponent, RegistrationComponent, LoginComponent, UserhomeComponent,
    RaiseclaimrequestComponent,SearchclaimComponent,UpdatepaymentComponent,UpdatememberstatusComponent,ClaimstobeprocessedComponent,
    UpdateprofileComponent,ListclaimsComponent,BulkstatusupdateComponent ];