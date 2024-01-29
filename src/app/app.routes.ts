import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { UserCrudComponent } from './admin/user-crud/user-crud.component';
import { ProductComponent } from './product/product.component';
import { SigninSignuComponent } from './customer/signin-signu/signin-signu.component';
import { SellerDashboardComponent } from './customer/seller/seller-dashboard/seller-dashboard.component';
import { BuyerDashboardComponent } from './customer/buyer/buyer-dashboard/buyer-dashboard.component';
import { CheckoutComponent } from './customer/buyer/checkout/checkout.component';
import { PageNotFoundComponent } from './shared/layout/page-not-found/page-not-found.component';

export const routes: Routes = [

    { path: "", redirectTo: "/", pathMatch: "full"},
    {  path: "",  component:HomeComponent},
    { path: "my-profile",component: UserProfileComponent },
    { path: "contact-us",  component:ContactUsComponent},

    //admin
    { path: "",
    children:[
            {   path: "adimn-login",component:AdminLoginComponent},
        ]
    },
    {path: "",
        children:[
          { path: "admin-dashboard",     component: AdminDashboardComponent },
          { path: "admin/user",     component: UserCrudComponent },
          { path: "admin/product",  component: ProductComponent }, 
        ]
    },
    {  path: "",
        children:[
            { path: "sign-in",  component: SigninSignuComponent },
            {  path: "sign-up", component: SigninSignuComponent}
        ]
    },
    //seller 
    {
        path: "",
        children:[
            {  path: "seller-dashboard",  component: SellerDashboardComponent},
            {  path: "seller/product",   component: ProductComponent}
        ]
    },
    //buyyer
    {
        path: "",
        children: [
            {  path: "buyer-dashboard",  component: BuyerDashboardComponent},
            {  path: "checkout",   component: CheckoutComponent  }
        ]
    },
    { path: "**",  component: PageNotFoundComponent  }
];
