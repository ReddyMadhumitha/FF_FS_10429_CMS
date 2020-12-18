import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MemberComponent } from './member/member.component';
// import { ListClaimsComponent } from './list-claims/list-claims.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
// import { PaymentUpdateComponent } from './payment-update/payment-update.component';
import { AdminComponent } from './admin/admin.component';
import { RaiseClaimRequestComponent } from './raise-claim-request/raise-claim-request.component';
import { SearchClaimComponent } from './search-claim/search-claim.component';
import { UpdateStatusComponent } from './update-status/update-status.component';
// import { BulkUpdateComponent } from './bulk-update/bulk-update.component';
// import { EligibleComponent } from './eligible/eligible.component';

const routes: Routes = [ {path:"register", component:RegisterComponent},
{path:"login", component:LoginComponent},
{path:"home", component:HomepageComponent},{
  path:"admin", component:AdminComponent},
{ path: "home/:p1", component: HomepageComponent },
{path:"member", component:MemberComponent},
{path:"raiseClaim", component:RaiseClaimRequestComponent},
{path:"searchClaim", component:SearchClaimComponent},
{ path: "member/:p1", component: MemberComponent },
// {path:"listClaims", component:ListClaimsComponent},
{path:"updateProfile", component:UpdateProfileComponent},
// {path:"payment", component:PaymentUpdateComponent}
{path:"admin/:p1", component:AdminComponent},
{path:"raiseClaim/:p1", component:RaiseClaimRequestComponent},
{path:"updateStatus", component:UpdateStatusComponent},
{path:"updateStatus/:p1", component:UpdateStatusComponent},
// {path:"payment/:p1", component:PaymentUpdateComponent}
// ,{path:"bulkUpdate", component:BulkUpdateComponent},
// {path:"listClaims/:p1", component:ListClaimsComponent}
// ,{path:"eligibility", component:EligibleComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const
RoutingComponent = [RegisterComponent, LoginComponent];
