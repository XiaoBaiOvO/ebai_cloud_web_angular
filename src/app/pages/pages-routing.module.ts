import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PagesComponent} from './pages.component';
import {AuthGuard} from "../core/auth/auth.guard";

const adminRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'welcome',
            },
            {
                path: 'welcome',
                loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule)
            },
        ],
    },
    {
        path: 'user',
        loadChildren: () => import('./login/user.module').then(m => m.UserModule)
    },
    {
        path: '**',
        redirectTo: '',
    },
];

@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]
})

export class PagesRoutingModule {

}
