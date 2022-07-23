import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './login.component';
import {UserRegisterComponent} from './register.component';
import {UserRegisterResultComponent} from './register-result.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        data: {title: '登录'}
    },
    // {
    //     path: 'login',
    //     component: LoginComponent,
    //     data: {title: '登录'}
    // },
    {
        path: 'register',
        component: UserRegisterComponent,
        data: {title: '注册'}
    },
    {
        path: 'register-result',
        component: UserRegisterResultComponent,
        data: {title: '注册结果'}
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UserRoutingModule {

}
