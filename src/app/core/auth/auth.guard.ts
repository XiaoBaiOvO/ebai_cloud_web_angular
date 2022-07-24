import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private auth: AuthService, private router: Router) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
        const url: string = state.url; // 将要跳转的路径
        // 已经登录，直接返回true
        if (this.auth.isLoggedIn) {
            return true;
        } else {
            // 修改登陆后重定向的地址
            this.auth.redirectUrl = url;
            // 重定向到登录页面
            this.router.navigate(['/user']).then(r => {});
            return false;
        }
    }
}
