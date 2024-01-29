import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

export const routes: Routes = [

    {
        path: "",
        redirectTo: "/",
        pathMatch: "full"
    },
    {
        path: " ",
        component:HomeComponent
    },
    {
        path: "my-profile",
        component: UserProfileComponent
    }
];
